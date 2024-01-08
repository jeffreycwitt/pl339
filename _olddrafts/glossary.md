---
layout: default
title: "Glossary"
---

# Class Glossary

Glossary is built from annotations tagged "glossary". So don't annotate these entries, rather glossary annotations should highlight a key word or phrase in our course packet or in a text we've read.  It's your job to provide us with a helpful definition / summary of the term. Tell us what the term or phrase means and its relevance to our course. As you make your annotations, feel free to add links to other resources on the web. 

**Again, don't annotate directly on this page.** Instead go out and annotate the web! This page is meant to be a report of that work. 

<div>
<div id="result-glossary">
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- order of scripts is important -->
<script src="{{ '/assets/js/checkLogin.js' | absolute_url }}"></script> <!-- checkLogin fxn -->
<script src="{{ '/assets/js/displayGlossary.js' | absolute_url }}"></script> <!-- displayGlossary -->
<script type="text/javascript">
$(document).ready(() => {
  checkLogin(displayGlossary, {tag: "glossary"});
});
</script>
</div>  
