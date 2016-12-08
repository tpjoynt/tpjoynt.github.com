---
layout: post
title: "Updating This Site!"
category: general
---
This site was really due for an update - I set it up over 4 years ago!

My goal with the blog is to have as much technical control without it being cumbersome - this basically meant rolling a lot of my own html, css and Jekyll-glue rather than using a built in template. This lets me be creative with many aspects of the look and feel, while flexing my frontend muscles (and a wee bit of design, though I doubt it'll evolve into much of a work of art). It also keeps the whole thing really small (and fast!).

It was also cool to see I had an old blog post I forgot about! Very cool to look back at some project I had before I started my first job. If you're thinking about writing up that project you were working on, I recommend it: it helps you organize your thoughts, gets your output out there in the world for someone else who has the same problem, and you get to look back on it later. Hopefully I will do this more for upcoming projects (very meta, I'm doing that right now).

### Tech Stuff

In the spirit of writing about technical projects, I'll be posting about my experience with this site itself, since that's what I'm working on! I'll post about whatever I think made my life easier and wasn't immediately obvious. Here's a couple of 'ingredients' I've used for this site:

* [Jekyll](https://jekyllrb.com/) (no plugins or themes yet)
* [SASS](http://sass-lang.com/)
* [FontAwesome](http://fontawesome.io/)
* [Google Fonts](https://fonts.google.com/) (Oxygen font)


### Deep-ish Dive: SASS

[SASS](http://sass-lang.com/) is basically syntactic sugar over CSS. I mostly leverage the nested selector feature:

    .social-icon {
        font-size: 32px;
        text-align: center;
        ...
        &:hover {
            opacity: 0.7;
        }
        &.github {
            background-color: #181717;
        }
        &.linkedin {
            background-color: #0077B5;
        }
        ...
    }

First, it helps keep the related classes organized - it's clear to see what a "social-icon github" class assignment will yield. For those not familiar with SASS, nesting with an ampersand (e.g. &.github) translates to a css selector of ".social-icon.github", or elements with both the social-icon and github class. Here's what the plain CSS would look like:

    .social-icon {
        font-size: 32px;
        text-align: center;
        ...
    }

    .social-icon:hover {
        opacity: 0.7;
    }
    .social-icon.github {
        background-color: #181717;
    }
    .social-icon.linkedin {
        background-color: #0077B5;
    }

not only is this more lines, but it's harder to parse where all of the "social-icon" related rules lie. If it got long enough in CSS, you might need to denote sections with a comment, adding even more lines.