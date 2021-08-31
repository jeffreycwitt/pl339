function getUrlVar() {
  var result = {};
  var location = window.location.href.split('#');
  var parts = location[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      result [key] = value;
  });
  return result;
}

function displayGlossary(d, successData){
  // TODO: to really get a sorted glossary after 200 entries, we really need to do a "FetchALL" 
  // that gets  all the annotations in batches of 200 and then alphabetizes the results

  const refreshResponse = d;
  localStorage.setItem("hypothesis.oauth.hypothes%2Eis.token", JSON.stringify(refreshResponse));
  authorizationToken = refreshResponse.access_token;
  const url = "https://api.hypothes.is/api/search";
  const groupId = getUrlVar()["groupId"] || "JLnnd2r9"
  const data = { tag: successData.tag, group: groupId, limit: 200, offset: 0 };
  $.ajax({
    type: "POST",
    dataType: "json",
    url: url,
    data: data,
    beforeSend: function(xhr){
        xhr.setRequestHeader("Authorization", "Bearer " + authorizationToken);
      },
    success: function(data){
      success(data, successData )
    }, 
    error: error
  });
}
function error(d){
  console.log("error", d);
}
function success(d, successData){
    const rows = d.rows;
    const newRows = rows.map((r) => {
      const terms = r.target[0].selector ? r.target[0].selector.filter((i) => (i.type === "TextQuoteSelector")) : []
      const term = terms[0] ? terms[0].exact : '';
      /* alt link form const link = r.uri + "#annotations:" + r.id; */
      const link = "https://hyp.is/" + r.id; 
      const username = r.user.split("acct:")[1].split("@")[0];
      return {
        term: term, 
        link: link,
        text: r.text,
        username: username
      }
    });
    // sort rows alphabetically if tag = glossary otherwise do not sort
    const sorted_rows = (successData.tag ==="glossary" || successData.tag === "gc") ? newRows.sort((a, b) => (a.term > b.term) ? 1 : -1) : newRows;
    sorted_rows.forEach((r) => {
      if (!r.term){
        $("#result-" + successData.tag).append("<div><p><a href='" + r.link + "'>Page Annotation</a>:</p><p style='padding-left:20px'>"  + r.text + " <span style='font-decoration: italic;'>(" + r.username + ")</span></p></div>");
      }
      else{
      $("#result-" + successData.tag).append("<div><p><a href='" + r.link + "'>" + r.term + "</a>:</p><p style='padding-left:20px'>"  + r.text + " <span style='font-decoration: italic;'>(" + r.username + ")</span></p></div>");
      }
    });
}