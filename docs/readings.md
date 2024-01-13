---
layout: default
title: "Readings"
published: true
---

# Readings by Lesson 

<div>
{%- assign ordered_pages_list = site.html_pages | where_exp:"item", "item.nav_order != nil" -%}
{%- assign sorted_ordered_pages_list = ordered_pages_list | sort:"nav_order" -%}

{%- for node in sorted_ordered_pages_list -%}
  <div> 
    <h2>Reading for <a href="{{ node.url | absolute_url }}">Class {{ node.nav_order }}</a> ({{ node.date}}):</h2> 
    <p>{{node.title}}</p>
    <ul>
      {%- for node2 in node.reading -%}
        <li class="reading" data-reading="{{node2}}"></li>
      {%- endfor -%}
    </ul>
  </div>
{%- endfor -%}
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript">
$(".reading").each(function(i, v){
      const _this = this;
      const readingid_and_trailing = $(this).attr("data-reading");
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
        const url = d.data.url;
        const pages = d.data.pages ? ", pp. " + d.data.pages : "";
        const trailing = readingid_and_trailing.split("=>")[1] ? ", " + readingid_and_trailing.split("=>")[1] : "";
        /* conditional so that i can raw html and easily based into moodle */
        const raw = false;
        if (raw){
          const insert = url ? "<li><a href='" + url + "' target='_blank'>" + author + ", " + title + pages + trailing + "</a></li>" : "<li>" + author + ", " + title + pages + trailing + "</li>";
          $(_this).text(insert);
        }
        else{
          const insert = url ? "<a href='" + url + "' target='_blank'>" + author + ", " + title + pages + trailing + "</a>" : author + ", " + title + pages + trailing;
          $(_this).html(insert);
        }
      });
    });
</script>