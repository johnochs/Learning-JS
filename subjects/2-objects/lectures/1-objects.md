#Objects
Almost everything in JS boils down to objects and functions at the most basic level and kind of what makes it unique as well.  To be 100% accurate, *even JS functions are actually `Function` objects*, making objects essentially the bedrock of the language.  JavaScript is sometimes called an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) programming language and it definitely can be used in an object-oriented way.  (It also has properties of a [functional](https://en.wikipedia.org/wiki/Functional_programming) programming language.)  However, it is important (especially for new programmers) from the very beginning to distinguish the difference between vanilla JS objects (sometimes called _POJOs_ for "plain old JavaScript object") and the "objects" we refer to when talking about programming in an object-oriented way.  The former are literally just instances of type `'object'` created by the `Object` constructor.  The latter are instances of a predefined construct which represents some real-world entity or concept.
In object-oriented programming (often abbreviated as OOP), we typically setup a model with definitions which will be useful across all instances of that model.  A `User` model, for example, may assume that all instances will have a name and an email address.  We may also want a function to log this information to the console, so a method for doing so would be defined on the model as well.  Then, all instances of the `User` model inherit this functionality out of the box.  We will get more into inheritance and reusable code later, and for our purposes, when people are talking about "objects" in the context of JavaScript, they usually mean POJOs.  Just know that if you're talking to or listening to someone talk about "objects" outside of a JS context, they are likely referring to the OOP definition.

###Objects in JavaScript
In JS, objects are essentially nothing more than a collection of properties.  These properties all have values; the values can be just about anything... strings, arrays, primitives like `true` or `null`, functions, `undefined`, or even other objects.  For example:

```javascript
var john = {

	name: "John",

	sayHi: function() {
	  console.log("Why hello there! I'm John!");
	},

	admin: true
}
```

In this situation, we have created a POJO and assigned it to a variable `john`.  A couple of important things to notice about the `john` object we defined above:
* We created the object with "object literal notation".  (The expression `{}` in JS is called an "object literal".  The other way we can create an object is through the more formal process of using its constructor `function var john = new Object()`.  Note that we then would have had to have set each of these properties on the freshly created `john` object after that.)
* It is not valid [JSON](https://en.wikipedia.org/wiki/JSON).  JSON (JavaScript Object Notation) implies that all the property names are string literals (i.e. are wrapped in double or single quote marks).  JS lets us take a shortcut and use property names which are valid JS identifiers so long as they do not start with a number or contain a space or a hyphen.  We can still use property names which contain spaces, hyphens, or start with a number, but they have to be wrapped in double quotes: `{ "this is a property": "this is it's value" }`.
* We adhered to [object literal syntax](http://www.dyn-web.com/tutorials/object-literal/).  The syntax rules for object literal syntax are as follows:
	* A colon separates property name from its value.
	* A comma separates each property-value pair from the next.
	* The last property-value pair does not have a comma after it.

This is by far the most common way that you will actually define properties on an object during its creation.

###Object Properties
Since any new object is really an instance of type `'object'` that means that there are some properties which are defined on it<sup>1</sup> by default.  Refer to [exercise 1](../exercises/1-objects-exercise.js) to take a look at these properties.

