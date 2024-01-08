---
layout: default
title: "Annotation Tags"
---

## Tags

The use of tags will help us group connected conversations across readings, webpages, and annotations. 

Some of these tags will emerge from pre-arranged tags or explicit class discussions within the course packet. But we should also be creative and allow groupings to emerge organically as various discussions take place. Note that annotations can have many tags at the same time. So in addition to using tags I suggest please invent any tag you want. You don't need my permission to make a tag. It can be serious or silly. (e.g. tag: 'RonaLife', 'what!?!?', etc.). 

As tags gains momentum and begin to "trend", I will add them to the running list of known tags below. Tags will be listed in alphabetical order, with a short description if necessary. To see the conversation around a given tag, click on the link below and you should see the annotation that have been marked with this tag.

If you want to suggest that a tag be added to this list, then just annotate this page somewhere and suggest the tag.

## List of Known Tags

<div id="nd" markdown="1">
**nd** (needs discussion): While you should feel free to ask lots of open ended questions for yourself, for your classmates, and for me, sometimes there are particularly difficult concepts or ideas being introduced that you want to make sure we go over in our "in-person" class time together. Use the "nd" tag to highlight these areas and then make sure to focus 

  <div>
    <a class="view-annotations" data-tag='nd'>View 'nd' tags</a>
    <div id="result-nd"  class="result" data-open='false'>
    </div>
  </div>
</div>

<div id="important" markdown="1">
**important**: have you found something that seems really "important" to our class discussion? Then tag it as "important" and tell us why.

  <div>
    <a class="view-annotations" data-tag='important'>View 'important' tags</a>
    <div id="result-important"  class="result" data-open='false'>
    </div>
  </div>
</div>

<div id="gc" markdown="1">

**gc** (glossary candidate): You may come across words that seem technical and important and seem deserving of a glossary entry. By using the 'gc' tag you can identify a word or phrase for yourself and others to come back to when your ready to add an official glossary entry. 

  <div>
    <a class="view-annotations" data-tag='gc'>View 'gc' tags</a>
    <div id="result-gc"  class="result" data-open='false'>
    </div>
  </div>
</div>

<div id="glossary" markdown="1">
**glossary**: the glossary tag should be used for creating an official glossary entry for a key term has emerged in our reading our class discussion. Glossary annotation should be a bit more polished then other entries. Here want to build an official dictionary like list of terms. These entries should be substantive, interesting, and relevant to our course. 

A second entry of the same word or phrase may be permissible, but it has to be justified. We don't want to fill our list with redundant entries. If you just want to add more information or a link to an existing entry, then go to the first annotation and add a reply. But if you think there is a second definition or valence to a word/phrase that justifies a second entry, then by all means add it. But your entry should justify your decision.

  <div>
    <a class="view-annotations" data-tag='glossary'>View 'glossary' tags</a>
    <div id="result-glossary"  class="result" data-open='false'>
    </div>
  </div>
</div>


<div id="orality-pros-cons" markdown="1">
**orality-pros-cons**: See [discussion thread](03-from-orality-to-litteracy.html#orality-pros-cons) 

  <div>
    <a class="view-annotations" data-tag='orality-pros-cons'>View 'orality-pros-cons' tags</a>
    <div id="result-orality-pros-cons" class="result" data-open='false'>
    </div>
  </div>
</div>
<div id="does-medium-matter" markdown="1">
**does-medium-matter**: See [discussion thread](02-the-medium-is-the-message.html#does-medium-matter) 

  <div>
    <a class="view-annotations" data-tag='does-medium-matter'>View 'does-medium-matter' tags</a>
    <div id="result-does-medium-matter" class="result" data-open='false'>
    </div>
  </div>
</div>


<div id="edition-rubric" markdown="1">
**edition-rubric**: See [discussion thread](10-beyond-the-book.html#edition-rubric) 

  <div>
    <a class="view-annotations" data-tag='edition-rubric'>View 'edition-rubric' tags</a>
    <div id="result-edition-rubric" class="result" data-open='false'>
    </div>
  </div>
</div>

<div id="feedback" markdown="1">
**feedback**: Use this tag to offer any course feedback. You can go to the [course feedback page](feedback.html) a "page" annotation and leave any feedback you want or leave a feedback comment on any other page. In either case, use the course tag "feedback" so we group these comments together

  <div>
    <a class="view-annotations" data-tag='feedback'>View 'feedback' tags</a>
    <div id="result-feedback" class="result" data-open='false'>
    </div>
  </div>
</div>





<div>

<style>
  #main-content a {
    white-space: normal;
  }
  .result{
    display: none; 
    font-size: 12px;
    background-color: #f5f6fa;
    padding: 5px;
    border-left: 5px solid #7253ed;
  }
  .result p{
    padding: 1px;
    margin: 1px;
  }
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- order of scripts is important -->
<script src="{{ '/assets/js/checkLogin.js' | absolute_url }}"></script> <!-- checkLogin fxn -->
<script src="{{ '/assets/js/displayGlossary.js' | absolute_url }}"></script> <!-- displayGlossary -->
<script type="text/javascript">
$(document).ready(() => {
  $('.view-annotations').click(function(){
    const tag = $(this).attr('data-tag');
    const openValue = $("#result-" + tag).attr('data-open');
    if (openValue === 'false'){
      const previouslyOpenedValue = $("#result-" + tag).attr('data-previouslyOpened');
      if (previouslyOpenedValue === 'true'){
        $("#result-" + tag).attr('data-open', 'true');
        $("#result-" + tag).show();
      }
      else{
        checkLogin(displayGlossary, {tag: tag});
        $("#result-" + tag).attr('data-previouslyOpened', 'true');
        $("#result-" + tag).attr('data-open', 'true');
        $("#result-" + tag).show();
      }
    }
    else
    {
      $("#result-" + tag).attr('data-open', 'false');
      $("#result-" + tag).hide();
    }
  });
});
</script>
</div>  