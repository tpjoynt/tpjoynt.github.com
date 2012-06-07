---
layout: page
title: Blog
tagline: Words
---

Things are still a little rough around the edges, but I'll be adding content and tweaking the layout and features periodically.

## Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

