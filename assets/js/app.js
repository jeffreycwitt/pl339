'use strict';

const DEFAULT_SERVICE_URL = 'https://hypothes.is';

const { Component, h } = preact;

/**
 * Parse a Hypothesis User ID of the form "acct:user@host".
 *
 * This is the format of the `userid` used in annotation and profile responses.
 */
function parseUserid(userid) {
  const re = /^acct:([^@]+)@(.*)$/;
  const [_, username, authority] = userid.match(re);
  return { username, authority };
}

function isPrivate(ann) {
  const groupId = getUrlVar()["groupId"] || "JLnnd2r9"
  return !ann.permissions.read.some(p => !p.indexOf('group:' + groupId));
}

function isInGroup(ann) {
  const groupId = getUrlVar()["groupId"] || "JLnnd2r9"
  return !ann.permissions.read.some(p => p.indexOf('group:' + groupId));
}
function isReply(ann) {
  return ann.hasOwnProperty("references")
}

function isDirect(ann) {
  return !ann.references
}
/**
 * 
 * @param {array} anns 
 */
function sortByCreation(a,b){
  return   new Date(a.created) - new Date(b.created)
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
 * A simple JavaScript application which lets the user view some data about
 * their Hypothesis profile.
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.client = new HypothesisAPIClient(DEFAULT_SERVICE_URL);
    
    const clientId = localStorage.getItem('hypothesis-client-id') || "d706d46c-d0dd-11ea-952d-2fceb4c84c47";
    const groupId = getUrlVar()["groupId"] || "i8V1nADX"
    const groupName = getUrlVar()["groupName"] || "PhilosophyOfInfoAndMedia" 
    //class group i8V1nADX/philosophyofinfoandmedia
    //TEW group JLnnd2r9 /  loyolatew2021
    localStorage.setItem('hypothesis-client-id', clientId);
    
    
    this.state = {
      // The OAuth client ID.
      clientId,
      // The Group Id
      groupId,
      // the group name
      groupName,
      // `true` if the user is currently logged in.
      isLoggedIn: false,
      // `true` if we're waiting for user to authorize app.
      authorizing: false,
      // `true` if we're currently fetching profile data.
      fetching: false,
      // The user's profile.
      profile: null,
      // Last `Error` that occurred
      error: null,
      // Statistics about the user's annotations
      annotationStats: null,
    };
  }

  componentDidMount(){
    this.checkLogin();
  }
  render() {
    let messages = [];
    let loginForm = null;
    let profileInfo = null;

    if (!this.state.isLoggedIn && !this.state.authorizing) {
      loginForm = this._renderLoginForm();
    }

    if (this.state.error) {
      messages.push(`Error: ${this.state.error.message}`);
    }

    if (this.state.authorizing) {
      messages.push('Waiting for authorization…');
    }

    if (this.state.fetching) {
      messages.push('Fetching profile…');
    }

    if (this.state.profile) {
      profileInfo = this._renderProfileInfo();
    }

    return h('div', {},
      messages,
      loginForm,
      profileInfo,
    );
  }

  _clientIdChanged(id) {
    localStorage.setItem('hypothesis-client-id', id);
    this.setState({ clientId: id });
  }

  // _renderLoginForm() {
  //   return h('div', {},
  //     h('h2', {}, 'Third party client test app'),
  //     h('form', { onSubmit: (e) => this._login(e) },
  //       h('input', {
  //         name: 'client_id',
  //         placeholder: 'OAuth Client ID',
  //         onInput: (e) => this._clientIdChanged(e.target.value),
  //         value: this.state.clientId,
  //       }),
  //       h('button', {}, 'Login with Hypothesis')
  //     )
  //   );
  // }

  _renderLoginForm() {
    return h('div', {},
      h('h2', {}, 'Third party client test app'),
      h('form', { onSubmit: (e) => this._login(e) },
        h('button', {}, 'Login with Hypothesis')
      )
    );
  }

  _showReply2(id){
    
    return this.state.annotationReplies.map((a) => {
      
      if(a.references && a.references.length >= 1) {
        if (a.references.includes(id)){
          return (
            h('p', {}, 
              h('a', {
                href: a.links.incontext,
                target: '_blank',
              }, "reply: "),
              h('span', {},  a.text + " (" + a.user + ")")
            )
          )
        }
      }
    })
  }
  _showReply(a){
    return h('div', {}, 
          h('p', {}, 
            h('a', {
              href: a.links.incontext,
              target: '_blank',
            }, "link "),
            h('span', {},  a.text + " (" + a.user + ")")
          ),
          h('div', {}, 
            this._showReply2(a.id)
          )
    )
  }
  _renderProfileInfo() {
    const { userid, groups } = this.state.profile;
    const groupId = this.state.groupId
    const groupName = this.state.groupName
    const { username } = parseUserid(userid);

    console.log(this.state.annotations)

    return h('div', {},
      // Profile info
      h('div', {},
        h('h2', {}, 'Profile'),
        `Username: ${username}`
      ),

      // Groups list
      h('div', {},
        h('h2', {}, 'Groups'),
        h('ul',{},
          groups
            .filter(g => g.url)
            .map(g =>
            h('li', {}, h('a', {
              href: g.url,
              target: '_blank',
            }, g.name))
          )
         )
      ),

      // Annotation stats
      h('div', {},
        h('h2', {}, '100 Most Recent Annotations'),
        h('p', {}, 
          h('a', {href: "https://hypothes.is/groups/" + groupId + "/" + groupName, target: '_blank'}, "See Alternative View of Group"),
        ),
        this.state.annotationStats ? [
          h('div', {}, `Total: ${this.state.annotationStats.total}`),
          h('div', {}, `Private: ${this.state.annotationStats.groupTotal}`),
          h('div', {}, `Group: ${this.state.annotationStats.publicTotal}`),
        ] :
          'Fetching…'
      ),
      
      h('div', {},
        h('h2', {}, 'Class Annotations'),
        this.state.annotations ? [
        h('ul',{},
        this.state.annotationMains.filter(isInGroup)
            .map(a => this._showReply(a))
         )
        ]
        : 
        'Fetching'
      ),
      h('div', {},
        h('h2', {}, 'My Private Annotations'),
        this.state.annotations ? [
        h('ul',{},
        this.state.annotationMains.filter(isPrivate)
            .map(a =>
            h('li', {}, a.text)
          )
         )
        ]
        : 
        'Fetching'
      ),

      h('hr'),

      // Logout
      h('button', {
        onClick: () => this._logout()
      }, 'Logout')
    );
  }

  _logout() {
    this.setState({
      annotationStats: null,
      isLoggedIn: false,
      profile: null,
    });

    this.client.logout();
  }


  checkLogin(){
    const savedInfo = localStorage.getItem("hypothesis.oauth.hypothes%2Eis.token") && JSON.parse(localStorage.getItem("hypothesis.oauth.hypothes%2Eis.token"));
    if (savedInfo){
      this.client.requestProfile('profile.read', null, {}, savedInfo.access_token)
        .then((profile) => {
          this.setState({
            fetching: false,
            isLoggedIn: true,
            authorizing: false,
            profile
      });
      this.fetchAll();
    }).catch((err) => {
      this.setState({
        authorizing: false,
        fetching: false,
        error: err,
      });
    });;
  }
}
fetchAll(){
  this.client.fetchAll().then((anns) => {
    const total = anns.length;
    const groupTotal = anns.filter(isPrivate).length;
    const publicTotal = anns.filter(isInGroup).length;
    const annotationReplies = anns.filter(isReply);
    const annotationMains = anns.filter(isDirect);
    this.setState({
      annotationStats: { total, groupTotal, publicTotal },
      annotations: anns,
      annotationReplies: annotationReplies.sort(sortByCreation),
      annotationMains: annotationMains
    });
  }).catch((err) => {
    console.log("erring", err)
    this.setState({ error: err });
  });
}

  /**
   * Handle the login form's "submit" event.
   */
  _login(e) {
    e.preventDefault();

    this.setState({
      authorizing: true,
      error: null,
    });

    //const clientId = e.target.elements.client_id.value;
    const clientId = this.state.clientId;

    this.client.login(clientId).then((token) => {
      this.setState({
        authorizing: false,
        isLoggedIn: true,
        fetching: true,
      });

      return this.client.request('profile.read');
    }).then((profile) => {
      this.setState({
        fetching: false,
        profile,
      });

      this.fetchAll();

    }).catch((err) => {
      this.setState({
        authorizing: false,
        fetching: false,
        error: err,
      });
    });
  }
}

preact.render(h(App), document.querySelector('#app'));