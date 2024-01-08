---
layout: default
title: "Feedback test"
---

# Course Feedback

Use this page as a general place to offer any course feedback. 

Use our class annotation tool to make a "page" annotation and leave any feedback you want. If something is not working, leave a comment. If something could work better, leave a comment. If something is working well, and you want to do more, leave a comment. 

When leaving a comment also use the tag "feedback" so that we can group together all feedback comments. This means you not only can leave feedback here, **but you can leave a "feedback" comment on any page**. Just use the "feedback" and they will be grouped together with all other feedback comments and be available here.

# Feedback Annotations 

<div>
<div id="result-feedback">
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- order of scripts is important -->
<script src="{{ '/assets/js/checkLogin.js' | absolute_url }}"></script> <!-- checkLogin fxn -->
<script src="{{ '/assets/js/displayGlossary.js' | absolute_url }}"></script> <!-- displayGlossary -->
<script type="text/javascript">
$(document).ready(() => {
  checkLogin(displayGlossary, {tag: "feedback"});
});
</script>
</div>  
