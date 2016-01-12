#Object-Oriented Javascript
What we do instead is to define a _class_ which represents the generic construct of a user.  A naive implementation might look something like this:

```javascript
function makeUser (name, admin) {
	return {
		
		name: name,

		sayHi: function() {
			console.log("Why hello there!  I'm " + name + "!");
		},

		admin: admin
	};

}

// And now we can create a new user like so:

var john = makeUser("John", true);
```

We are on the right track here by using a function to create _instances_ of users, but there is still a better way.  There are a few problems with the above implementation.  The two which are the most problematic are these:

* `makeUser` only returns POJOs.  Why is that important?  It is important because it means that all of it's properties are inherited from `Object`.  Each user is an _instance_ of `Object` (i.e. `typeof john` returns `'object'` and `john.constructor` returns `'[Function Object]'`) This ties into the second main problem...
* Because the user instances returned by `makeUser` are `'object'`s, we cannot leverage the benefits of inheritance to make our code more efficient.  As a consequence, each time we invoke `makeUser` to create a new instance of a user, JavaScript is defining (and thus allocating memory to) a unique `sayHi` function on each individual user.  If we make 1000 users, then there will be 1000 `sayHi` functions in memory.  This doesn't seem particularly efficient since they are all essentially the same
