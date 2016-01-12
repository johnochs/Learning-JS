// OPEN THIS FILE IN A TEXT EDITOR

/*
Objects created in JS are of type 'object' and you might think that a brand
new object:

var myObj = {}

would have no properties on it by default.  This is not really the case though
since myObj is of type 'object', it means that it has inherited some properties
from its constuctor's prototype.
*/

/*
EXERCISE 1
Go to a blank tab in chrome and open up the developer's console.  Start by
defining a blank object:

var myObj = {};

In chrome, we can see all the properties defined on a object just by typing a
period after the object name.  So, with your new object defined, type the
following into the console:

myObject.

After typing the period, you should see some options pop up. List the properties
which are already defined on your object below:
*/

var myObjProps = {
	1: "some property", 
	2: "some property",
	3: "some property",
	4: "some property",
	5: "some property",
	6: "some property",
	7: "some property",
	8: "some property",
	9: "some property",
	10: "some property",
	11: "some property"
};

/*
EXERCISE 2
You should have found a property defined on this object called "constructor".
You also should have found a property called "hasOwnProperty".  These are both
properties which are not defined on "myObj" itself, but rather on
Object.prototype.  Since "myObj" is of type 'object', it has access to the
properties which are defined on Object.prototype.

Try the following in the chrome console and copy and paste the result you get
to the variable below.  (The result should be a string, so you might need to add
quote marks aroudn it - "").
*/

// myObj.constructor  (Paste the output after the = sign below replacing the "?").
var constructorResult1 = "?";

// myObj["constructor"]
var constructorResult2 = "?";

// myObj.hasOwnProperty
var hasOwnPropertyResult1 = "?";

// myObj.hasOwnProperty("constructor") (this result should not be a string but a boolean)
var hasOwnPropertyResult2 = "?";



