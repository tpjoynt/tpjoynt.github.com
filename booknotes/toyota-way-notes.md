---
title: "Toyota Way Notes"
---

The [wiki](https://en.wikipedia.org/wiki/The_Toyota_Way) does a good job summarizing.

## 5 whys

5 whys root cause investigation has been really useful for me. It's a good way to structure a post-mortem - if something went wrong, ask why 5 times. For example:

- we had an outage last week. Why?

- - The database ran out of space. Why?
  - - - We had a spike in traffic. Why?
  - - - - We ran a promo.
  - - - - - Root cause: We ran a promo but didn't alert the engineering team.
  - - - We weren't watching the space left on the database server. Why?
  - - - - We don't have any alerting on that.
  - - - - Action item: Add alerting for database server storage. While we're at it, make sure we have alerting for other health metrics (CPU, memory). Check that's also on our web servers as well.

This (admittedly made up) example shows how this can work - sometimes there are concrete actions (setup alerting), sometimes it's just a better way to find root causes that are more about communicating what happened. It also doesn't need to be explicitly 5 whys - action items and root causes will arise from people as you lead the meeting.

It's also important to remind yourself that this isn't about blame on people - it's about improving the processes in which you work. In this scenario, you could "blame" the DBA for not monitoring the disk size - but it's better to look objectively at the fact that monitoring doesn't exist.

Also, doing this exercise can uncover lots of things to fix. This is what is meant when failure is a great time to learn - it's a point where something didn't work, so there can be lots of data there for what important work can be done to make things work better.

## Lean and Pull Systems

This is also the birthplace of lean manufacturing, which got rolled into Lean Startup and those sorts of systems.

The essence is, try to minimize inventory, since it takes a lot longer to realize defects (could have a warehouse full of bumpers that are broken). Instead, use "pull" - pull items from the demand from the customer. When there's a new car order, pull each of the required parts. Kanban flagging is a way to do this.

Inventory and batch size are good mental models for me. For software products, information are the pieces of production. If you launch a product that takes 1 year to build and you don't put it in front of customers, that's a very big batch size, and it's very risky that the quality won't be right. This is what Agile does as a methodology as well - reduce batch size to continually ensure quality through customer acceptance.

If things are moving slowly on your team, think about inventory and batch size - are we keeping an inventory of information / insights / features? Do we have a lot of features that haven't launched? Are the features too big?
