
# Modules and `Require`
## The Module
We aren't going to spend a great deal of time exploring the minutiae of the
Node module system.  If you are deeply interested in it, there are myriad
resources available online, or you can even dig down into the Node source code
and explore the Module system first hand.  Here we will just present the basic,
fundamental concepts concerning Node modules which will get you up and running.

Node modules serve a few purposes:

* They keep code _modular_. :smirk:
* They provide a convenient means of namespacing code.
* They provide a structure which aids development and consumption of code.
* They decouple and isolate non-related code.
* Many other things.

The module paradigm is to have one module per file and one file per module. At its heart a module is generally _an object which contains functions or data which pertain to a particular use or are relevant in a focused, domain-specific area of business logic_.  Modules may be complex (e.g. an object containing hundreds of functions, other objects, etc... although this probably indicative of the need to break it into smaller pieces), or simple (e.g. just one function).

## A Basic Example

Let's say we are in the directory `./`.  In this directory we have two files, `employees.js` and `management.js` as described below.

#### employees.js

```javascript
var employeeHolidays = [
	{
		name: "Christmas",
		date: new Date(2016, 12, 25),
		note: "This is only a half day."
	}
];

var employeeRequests = [
  "Starbucks for the breakroom.",
  "Regular OSHA inspections.",
  "Eight hours' labour, Eight hours' recreation, Eight hours' rest!",
  "Basic human dignity.",
  "That Mr. Jones please stop chewing with his mouth open."
];

function prettyPlease () {
	var delay = 1000;
	
	employeeRequests.forEach(function(req) {
			setTimeout(processEmployeeRequest(req), delay);
			delay = delay + 1000;
	});
}
```

#### management.js

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