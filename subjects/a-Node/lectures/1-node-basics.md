# <img src="http://www.eureksolutions.com/image/nodejs_logo.png" width="30" height="30"> Node Basics

## What is Node?
Node is all that lovely JavaScript deliciousness you're familiar with, but in a
certain sense it is completely the opposite of the traditional client-side JS
you are familiar with.  Node is designed to run on the server, not the client. 
As such, it embraces a few paradigms which are not present in the JavaScript 
client-side context.

It's inception came about in 2009 and its author was Ryan Dahl.  Node has been
through considerable development iterations since its introduction at JSConf in 
2009.  The most notable advancements have been [NPM](https://www.npmjs.com) in
2011, or _Node Package Manager_, which is very similar to RubyGems if you're a
Rubyist. NPM simply allows for the easy installation and integration of
open-source JS code into your Node project.

Many of the Node core modules have been iterated on as well, and there was even
a schism where a fork of Node was transitioned into something called IO.js.
As of this writing, Node.js and IO.js are in the process of being merged back
into one repository which will be overseen by an open-governance committee.  If
you are interested in why this happened, check out this
[article](https://www.quora.com/Why-is-NodeJS-splitting-into-two-versions-io-js-and-node-js).

## How is Node Different?
The most important difference between Node and client-side JS is how code is
organized.  On the client, all the JS we pull in asynchronously via `<script>`
tags, or define explicitly within `<script>` tags shares the same global domain.
This isn't ideal for a few reasons, but the most important reason this is not so
great is because there is no native solution for name-spacing.  Let's say we are
running an e-commerce site which caters to bros and we require JavaScripts from
Natty-Ice and Axe.
For some retarded reason, both scripts have a global variable `broNoWay`.  One 
of these will undoubtedly clobber the other (depending on the order of 
execution).  This will ultimately lead to JS problems and many an unhappy bro.

In Node, however, we split our code into files which are not ultimately
concatenated into a single JavaScript.  Typically, each file defines one (and 
only one) "module".  A module could be anything really... a function, an object,
a class (in ES6).  Of course, just as we do on the client, naturally we 
would want the ability for the code in these files to communicate.  This is
purpose that Node's `require` function serves (more on this later). For now, all
you really need to know is that the `require` function allows us to read and
compile another JS file.

Another major difference is that Node is a JavaScript project, not a language
in and of itself. While many adaptations have been made and on its face, Node
code may look different than client-side JS.  Don't be fooled.  It's all
JavaScript.  That said, because Node is not its own language but rather a
project simply built in JavaScript, it contains many core modules which provide
the functionality required for running a web server.  These provide support for
the essential server tasks of IO, resolving paths and file locations, dealing
with HTTP protocols, the cryptographic necessities of security in client-server
relations, etc.

Node has to do a lot of things that client-side JS never had the necessity to
think about (namely I/O), which is the main reason for this additional
functionality.  That said, client-side JS and Node still share these core,
fundamental traits:

#### Node and Client-Side JS are Both:
* Single-threaded
* Event-loop oriented<sup>1</sup>

Again, if you're a rubyist, the easiest way to think about this is as follows:

> Node = Rails

> JavaScript = Ruby

> NPM = RubyGems

> package.json = Gemfile

If you're not a Rubyist... well... go learn Ruby or something.

Don't worry about the last bit concerning package.json just yet. We'll get to 
that later.

## Additional Reading
* [Wikipedia's *surprisingly* short article on Node](https://en.wikipedia.org/wiki/Node.js)
* [Node's Homepage](https://nodejs.org/en/)
* [Why IO.js Exists](https://www.quora.com/Why-is-NodeJS-splitting-into-two-versions-io-js-and-node-js)

<hr>

<sup>1</sup> While the behavior of the event-loop in Node and the JS which runs 
in your browser is similar, there is a fundamental difference: client-side JS
relies on the browser to govern the event loop, Node must register its processes
with your OS's kernel, which is fundamentally a lower-level and less abstracted
process. Mostly you will not need to concern yourself with these details.