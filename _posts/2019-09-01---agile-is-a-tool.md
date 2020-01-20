---
title: Agile and Tradeoffs
date: "2019-09-01"
template: "post"
draft: false
slug: "/posts/agile-and-tradeoffs/"
category: "Programming"
tags:
  - "Agile"
  - "Software Projects"
description: "Agile is about tradeoffs between preparation and construction, which weigh differently in different programming projects."
socialImage: "/media/agile.png"
---

Agile seems to be a lot of things these days.

When I think of agile, I always refer back to the first principles: [this old web 1.0 site](https://agilemanifesto.org/).

It lays out some pretty simple things to follow - talk more, ship more, respond to change. That's ... kind of it.

Martin Fowler summarizes the current climate well in his [State of Agile Software in 2018](https://martinfowler.com/articles/agile-aus-2018.html) (emphasis mine):

> On the surface, the world of agile software development is bright, since it is now mainstream. But the reality is troubling, because **much of what is done is faux-agile, disregarding agile's values and principles**. The three main challenges we should focus on are: fighting the Agile Industrial Complex and its habit of imposing process upon teams, raising the importance of technical excellence, and organizing our teams around products (rather than projects). Despite the problems, the community's great strength is its ability to learn and adapt, tackling problems that we original manifesto authors didn't imagine.

What is this "faux-agile"? Rather than dive into what Agile isn't, it may be good to dive a bit more into what it is, and where it should be used.

Code Complete contextualizes the situation well: it's a tradeoff between preparation and construction.

They use these example projects, in order of preparation needed:

- Business Systems
- Mission-Critical Systems
- Embedded Life-Critical Systems

Basically, business systems can iterate more rapidly, but systems with more rigid requirements require more rigid processes.

This is why, for example, [Google may not use Agile often](https://www.quora.com/Why-do-some-developers-at-strong-companies-like-Google-consider-Agile-development-to-be-nonsense) - they work on lots of mission critical (i.e. at enormous scale) systems, so they need more rigidity than 1-2 week sprints.

But, for a lot of software projects, you're working with business systems. You have some external, probably non-technical customer, and you're trying to figure out what they want and build it for them in a reasonable amount of time.

Agile was born out of a time when doing that involved talking to the customer a lot, gathering requirements, turning those requirements into spec, writing the software, delivering it. All duties possibly performed by different people. The result was that defects could occur anywhere in that process, and it wasn't until the software was finally shipped were they made apparent.

So these guys went to a ski lodge and said hey, if we did smaller iterations and collaborated more closely, it might be less likely we build the wrong thing.

The way I like to think about these things is with batch size and risk. For lots of business projects, the only true way to know it's a success is if it's in the hand of the customer and they approve. So, if you have a very large batch size - say, 3 months - what happens when they don't approve of the work? Instead, you could work more incrementally, and adjust your course as you gather their feedback. This tends to work well for startups that are also iterating on their entire business model, along with the products they're shipping.

So really, like most things in engineering, Agile is about tradeoffs.

#### Footnotes

The section of Code Complete is 3.2 Determine What Kind of Software You're Working On.
