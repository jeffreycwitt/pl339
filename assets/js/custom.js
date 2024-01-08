function addLink(value, trailing){
  console.log("test");
  const link = value.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;\s]*[-A-Z0-9+&@#/%=~_|])/ig);
  let mainlink = '';
  if (link){
    const firstString = value.split(link[0])[0];
    let strings = [firstString];
    link.forEach((l, i) => {
      mainlink = encodeURI(l);
      const linkComponent = "";
      strings.push(linkComponent);
      const afterString = value.split(l)[1];
      const prunedString = afterString.split(link[i+1])[0];
      strings.push(prunedString);
    });
    // pop to remove trailing period
    strings.pop()
    if (trailing){
      strings.push(trailing)
    }
    const finalString = "<a class='biblink' href='" + mainlink + "' target='_blank'>" + strings.join(" ") + "</a>";
    return finalString;
  }
}


$(document).ready(function(){
  const releaseDate =  new Date($("#published-date").attr("data-date") + " 10:50 EST");
  console.log("releaseDate", releaseDate)
  const currentDate = new Date()
  console.log("current date", currentDate)
  const postRelease = currentDate > releaseDate
  console.log(postRelease);
    /* checkLogin(function(){console.log("login checked")});*/
  
    
    if (postRelease){
      $(".dquestion").append("<span style='display: inline; font-size: 12px'> (TR)</span>")
      $(".dquestion").next(".answer").css("display", "block");
    }
    else{
      $(".dquestion").append("<span style='display: inline; font-size: 12px'> (TR)</span>")
    }

    // $(".dquestion").click(function(){
    //   if (postRelease){
    //     /* $(this).next(".answer").toggle();*/
    //     if ($(this).next(".answer").css("display") === "block"){
    //       $(this).next(".answer").css("display", "none");
    //     }
    //     else{
    //       $(this).next(".answer").css("display", "block");
    //     }
    //   }
    // });
  
    if (postRelease){
      $(".question").next(".answer").css("display", "block");
    }
    else {
    $(".question").append("<span style='display: block; font-size: 12px'>click on question to toggle a possible response</span>")


  // $(".question").click(function(){
  //   /* $(this).next(".answer").toggle();*/
  //   if ($(this).next(".answer").css("visibility") === "visible"){
  //     $(this).next(".answer").css("visibility", "hidden");
  //   }
  //   else{
  //     $(this).next(".answer").css("visibility", "visible");
  //   }

  $(".question").click(function(){
    /* $(this).next(".answer").toggle();*/
    if ($(this).next(".answer").css("display") === "block"){
      $(this).next(".answer").css("display", "none");
    }
    else{
      $(this).next(".answer").css("display", "block");
    }
  });
}
  getReadingTime();

  
  $("blockquote, .discussion").each(function(i, v){
    const idval = $(this).attr("id");
    if (idval){
      $(this).prepend("<a href='#" + idval + "' class='quote-link'><svg class='block-link' viewBox='0 0 16 16'> <title>Link</title> <path fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'></path> </svg></a>");
    }
  });
  
  $(".discussion").each(function(i, v){
    const idval = $(this).attr("id");
    if (idval){
      $(this).append("<p style='font-size: 12px;'>(When you respond, use the tag: <span style='font-style: italic;'>" + idval + "</span> to group responses around this discussion. Remember, you can also use this tag anywhere else for annotations having to do with this discussion and then we can view them grouped together <a href='annotation-tags.html#" + idval + "'>here</a>)</p>")
    }
  });

  $(".reading, .citation").each(function(i, v){
    const _this = this;
    const readingid_and_trailing = $(this).attr("data-reading");
    const annotation_target = $(this).attr("data-annotation");
    const readingid = readingid_and_trailing.split("=>")[0];
    const url = "https://api.zotero.org/groups/2536930/items/" + readingid;
    $.get(url, function(d){
      const authors = d.data.creators.filter((c) => c.creatorType === "author");
      let author = "";
      if (authors.length > 1){
        author = authors[0].lastName + ", et al"
      }
      else if (authors.length > 0){
        author = authors[0].lastName;
      }
      else if (d.data.creators[0]){
        author = d.data.creators[0].lastName;
      }
      const title = d.data.title;
      const url = annotation_target ? annotation_target : d.data.url;
      const pages = d.data.pages ? ", pp. " + d.data.pages : "";
      const trailing = readingid_and_trailing.split("=>")[1] ? ", " + readingid_and_trailing.split("=>")[1] : "";
      const insert = url ? "<a href='" + url + "' target='_blank'>" + author + ", " + title + pages + trailing + "</a>" : author + ", " + title + pages + trailing;
      $(_this).html(insert);
    });
  });
});

const getReadingTime = () => {
  const txt = $(".main-content")[0].textContent;
  const wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;
  const numQuestions = $(".question").length;
  const numDiscussions = $(".discussion").length;
  const readingTimeInMinutes = Math.floor(wordCount / 228) + 1;
  const readingTimeAsString = "Lesson Estimated Reading Time: " + readingTimeInMinutes + " mins";
  const watchtime = $('.watch-time').attr('data-watchtime');
  $('.reading-time').html(readingTimeAsString);
  if (watchtime){
    $('.watch-time').html(" | Estimated Watch Time: " + watchtime + " mins");
  }
  if (numQuestions > 0){
    $('.numQuestions').html(" | Number of Questions: " + numQuestions);
  }
  if (numDiscussions > 0){
    $('.numDiscussions').html(" | Number of Discussions: " + numDiscussions);
  }
      // toc link behavior override 

      $('#markdown-toc a').click(function(e) {
        e.preventDefault(); 
        console.log("html fragment link override is running")
        const anchor_id = $(this).attr("href")
        const justId = anchor_id.split("#")[1]
        scroll_to_anchor(justId)
    });
};





function scroll_to_anchor(justId){
    var tag = $("#" + justId);
    $('html,body').animate({scrollTop: tag.offset().top},'slow');
}