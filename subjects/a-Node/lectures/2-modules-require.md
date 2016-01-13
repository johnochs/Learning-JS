
# Modules and `Require`
## The Module
We aren't going to spend a great deal of time exploring the minutiae of the
Node module system.  If you are deeply interested in it, there are myriad
resources available online, or you can even dig down into the Node source code
and explore the Module system first hand.  Here we will just present the basic,
fundamental concepts concerning Node modules which will get you up and running.

Node modules serve a few purposes:

* They keep code _modular_. :smirk:
* They provide a convenient means of name-spacing code.
* They provide a structure which aids development and consumption of code.
* They decouple and isolate non-related code.
* Many other things.

The Node module paradigm is to have one module per file and one file per module. At its heart a module is generally _an object which contains functions or data which pertain to a particular use or are relevant in a focused, domain-specific area of business logic_.  Modules may be complex: an object containing hundreds of functions, other objects, etc. (although this probably indicative of the need to break it into smaller pieces). Or a module may be simple: a single function.

## A Basic Example

Let's say we are in the directory `./`.  In this directory we have two files, `employees.js` and `management.js` as described below.

#### `employees.js`

```javascript
var employeeHolidays = [
	{
		name: "Christmas",
		date: new Date(2016, 12, 25),
		note: "This is only a half day."
	}
];

var employeeRequests = [
  "starbucks for the breakroom",
  "regular OSHA inspections",
  "eight hours' labour, eight hours' recreation, eight hours' rest",
  "basic human dignity",
  "just one lunch where Mr. Jones doesn't chew with his mouth open"
],

function prettyPlease() {
	var delay = 1000;
	
	employeeRequests.forEach(function(req) {
			setTimeout(processEmployeeRequest(req), delay);
			delay = delay + 1000;
	});
}
```

#### `management.js`

```javascript
var managementHolidays = [
	{
		name: "New Year's Day",
		date: new Date(2016, 1, 1)
	},
	{
		name: "Ronald Reagan's Birthday",
		date: new Date(2016, 2, 6)
	},
	{
		name: "Secretary's Day",
		date: new Date(2016, 4, 27),
		note: "Technically the name is \"Administrative Professionals' Day\"... lol."
	},
	{
		name: "Lehman Brothers Commemoration Day",
		date: new Date(2016, 9, 15)
	},
	{
		name: "Black Friday",
		date: new Date(2016, 11, 25)
	},
	{
		name: "Christmas",
		date: new Date(2016, 12, 25)
	}
];

function processEmployeeRequest(req) {
	return "No.";
}
```

Have you spotted the problem?  It's in `employees.js`.  Remember, this is an isolated file, not one which will eventually become concatenated with `management.js`.  Thus, if you were to run the function `prettyPlease`, you shouldn't be surprised that this would be returned: `ReferenceError: processEmployeeRequest is not defined`.

So, how do we make this function, which exists in `management.js`, available to a function which is defined in `employees.js`?  The answer is... :sparkles:`Require`:cupid:

Let's make some changes to `employee.js` and `management.js` so they can be used by Node's module system and we can access functions defined in one module from another!  Have a look at these refactored files:

#### `employees.js`

```javascript
var makeRequest = require("./management").processEmployeeRequest;

var employees = {

	employeeHolidays: [
		{
			name: "Christmas",
			date: new Date(2016, 12, 25),
			note: "This is only a half day."
		}
	],

	employeeRequests: [
	  "starbucks for the breakroom",
	  "regular OSHA inspections",
	  "eight hours' labour, eight hours' recreation, eight hours' rest",
	  "basic human dignity",
	  "just one lunch where Mr. Jones doesn't chew with his mouth open"
	],
	
	prettyPlease: function() {
		var delay = 1000;

		this.employeeRequests.forEach(function(req) {
			setTimeout(function() {
				console.log("May we have... " + req + "?");
				makeRequest(req);
			}, delay);

			delay = delay + 1000;
		});
		return "Employee Requests: \n";
	}
};

console.log(employees.prettyPlease());

module.exports = employees;
```

#### `management.js`

```javascript
var management = {

	managementHolidays: [
		{
			name: "New Year's Day",
			date: new Date(2016, 1, 1)
		},
		{
			name: "Ronald Reagan's Birthday",
			date: new Date(2016, 2, 6)
		},
		{
			name: "Secretary's Day",
			date: new Date(2016, 4, 27),
			note: "Technically the name is \"Administrative Professionals' Day\"... lol."
		},
		{
			name: "Lehman Brothers Commemoration Day",
			date: new Date(2016, 9, 15)
		},
		{
			name: "Black Friday",
			date: new Date(2016, 11, 25)
		},
		{
			name: "Christmas",
			date: new Date(2016, 12, 25)
		}
	],

	processEmployeeRequest: function(req) {
		return "No.";
	}
}

module.exports = management;
```

# LEFT OFF HERE

These files are leaning towards true "modularity". When we speak of [modularity](https://en.wikipedia.org/wiki/Modular_programming) in programming, we are referring to an organizational paradigm which suggests that small chunks of our program's functionality should be written in discrete chunks which can be easily interchanged. As an analogy, think of physical computer architecture; we can use just about any hard disk drive, optical drive, video card, or network card that we want... all we have to do is open up our computer and install or swap them.<sup>1</sup> Truly modular *modules* would have all the logic and code contained inside of them to do their one particular task completely independently.

By embracing modularity, we are also adhering to the more general concept of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). You can grasp the general concept of separation of concerns (SoC) from the name alone. Basically it suggests that code should be split up into sections.  How it is divided can vary, but for our purposes, it should be divided along the lines of our application's entities.  That is to say, code which deals with the `user` should kept independent from code which deals with `comments`, or a `http_request`, or a `dope_beat`, etc.

By designing our application in accordance with the principles of modularity and the separation of concerns, we also gain several other benefits.

* Code [reusability](https://en.wikipedia.org/wiki/Reusability)!
* Easier testing.
* Code independence.
* Lower probability of naming conflicts.
* Greater ease of changing functionality (fixing bugs and upgrading).

The emphasis of modular programming is to break things down into very small pieces which are concise (hence the name *modules*<sup>2</sup>), only do one thing, do that thing well, and are obviously correct or easy enough to unit test.

> ### :bulb: Component-Based Architecture
> There is also a higher level concept of modularity which exists in what is called [component-based software engineering](https://en.wikipedia.org/wiki/Component-based_software_engineering). Think *react components* f you are familiar with React.js.  This type of architecture still may embrace more traditional modularity concepts, but the concerns are more separated along the lines of particular resource, service, or software package.  In React, one may build a component which deals with logging in users.  In reality, this is very likely a *composite* component; a component which is built from other (smaller) React components.
>
> In this case, while the individual files in this component may still be modular, they are likely meaningless outside of the context of the larger component as a whole.
>
> Component-based architecture is becoming more and more ubiquitous as many large-scale web applications are moving away from a monolithic single-application paradigm to a more fragmented micro-service organization.



<hr>

<sup>**1**</sup> This does not apply to Apple products.

<sup>**2**</sup> In some languages, modules are referred to as *packages*.