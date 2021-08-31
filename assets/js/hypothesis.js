'use strict';

function randomHexString(len) {
  const bytes = new Uint8Array(len / 2);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map(byte => byte.toString(16)).join('');
}

function getUrlVar() {
  var result = {};
  var location = window.location.href.split('#');
  var parts = location[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      result [key] = value;
  });
  return result;
}
/**
 * Simple client for authenticating with the Hypothesis API and making requests
 * to it.
 *
 * Usage example:
 *
 * ```
 * const client = new HypothesisAPIClient();
 * client.login().then(() => {
 *  return client.request('profile.read');
 * }).then((profile) => {
 *  console.log(`You logged in as ${profile.userid}`);
 * });
 * ```
 */
class HypothesisAPIClient {
  /**
   * @param {string} serviceUrl
   */
  constructor(serviceUrl) {
    /** URL of the service, eg. https://hypothes.is */
    this.serviceUrl = serviceUrl;

    /** Access token for the service. */
    this.token = null;

    /**
     * API route information, returned by the service's `/api` endpoint.
     */
    this.links = null;
  }

  /**
   * Authenticate with the Hypothesis service.
   *
   * @param {string} clientId - OAuth client ID
   * @return {Promise<string>} - Access token for making API requests.
   */
  async login(clientId) {
    // Random state string used to check that auth messages came from the popup
    // window that we opened.
    const state = randomHexString(16);

    // Promise which resolves or rejects when the user accepts or closes the
    // auth popup.
    const authResponse = new Promise((resolve, reject) => {
      function authRespListener(event) {
        if (typeof event.data !== 'object') {
          return;
        }

        if (event.data.state !== state) {
          console.log("event", event)
          // This message came from a different popup window.
          return;
        }

        if (event.data.type === 'authorization_response') {
          
          resolve(event.data);
        }
        if (event.data.type === 'authorization_canceled') {
          reject(new Error('Authorization window was closed'));
        }
        window.removeEventListener('message', authRespListener);
      }
      window.addEventListener('message', authRespListener);
    });

    // Authorize user and retrieve grant token
    const width  = 400;
    const height = 400;
    const left   = window.screenX + ((window.innerWidth / 2)  - (width  / 2));
    const top    = window.screenY + ((window.innerHeight / 2) - (height / 2));

    const origin = location.origin;
    const authUrl = `${this.serviceUrl}/oauth/authorize?client_id=${clientId}&response_type=code&response_mode=web_message&origin=${origin}&state=${state}&scopes=annotation:read`;
    window.open(authUrl, 'Login to Hypothesis', `left=${left},top=${top},width=${width},height=${height}`);

    const { code } = await authResponse;

    // Exchange grant token for access token.
    // Note that the token will expire after a period of time.
    //
    // This client currently makes no effort to refresh the token.
    // const params = new URLSearchParams();
    // params.append('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer');
    // params.append('assertion', code);
    // console.log("code", code);
    // console.log("code request params", params.code);
    const params = "grant_type=authorization_code&code=" + code + "&client_id=" + clientId;
    const resp  = await fetch(`${this.serviceUrl}/api/token`, {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(r => r.json());
    const access_token = resp.access_token
    
    localStorage.setItem("hypothesis.oauth.hypothes%2Eis.token", JSON.stringify(resp));
    
    // Get API routes.
    const links = await fetch(`${this.serviceUrl}/api/`).then(r => r.json());
    this.token = access_token;
    this.links = links.links;

    return access_token;
  }

  /**
   * Forget the access token and API routes.
   *
   * Note that this does not actually _revoke_ the access token.
   */
  logout() {
    this.token = null;
    this.links = null;
    localStorage.setItem("hypothesis.oauth.hypothes%2Eis.token", "");

  }

  /**
   * Make an API request and return the response.
   *
   * The set of available API methods can be found by inspecting the result of the
   * service's `/api/` endpoint.
   *
   * @param {string} method - The method path, eg. "annotation.read".
   * @param {Object} [data] - Body of the request
   * @param {Object} [params] - Dictionary of query string parameters for the request.
   * @return {Promise<Object>} - The JSON response from the API.
   */
  request(method, data = null, params = {}) {
    const path = method.split('.');
    let meta = this.links;

    path.forEach((segment) => {
      if (!meta[segment]) {
        throw new Error(`Unknown method ${method}`);
      }
      meta = meta[segment];
    });

    const headers = {};
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const url = new URL(meta.url);
    Object.keys(params).forEach(k => {
      url.searchParams.append(k, params[k]);
    });
    return fetch(url.toString(), {
      method: meta.method,
      headers,
      body: data,
    }).then(r => r.json());
  }
  async requestProfile(method, data = null, params = {}, token = null) {
    const path = method.split('.');
    const url = new URL(`${this.serviceUrl}/api/profile`)
    
    const links = await fetch(`${this.serviceUrl}/api/`).then(r => r.json());
    this.links = links.links;

    this.token = token || this.token;
    const headers = {};
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }
    return fetch(url.toString(), {
      method: "GET",
      headers,
      body: data,
    }).then(r => r.json());
  }

  /**
   * Fetch all of the user's annotations.
   *
   * @return {Promise<Annotation[]>}
   */
  async fetchAll() {
    const anns = [];
    let total = null;
    const groupId = getUrlVar()["groupId"] || "JLnnd2r9"
    //while (total === null || anns.length < total) {
     // while (total === null || anns.length < 100) {
      const searchResult = await this.request('search', null, {
        offset: anns.length,
        limit: 100,
        group: groupId
      });

      total = searchResult.total;
      anns.push(...searchResult.rows);
    //}

    return anns;
  }

}

