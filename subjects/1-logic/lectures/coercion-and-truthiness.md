# Coercion, Truth, and Being Lied to
## Coercion
If the last exercise is making you uncomfortable and you haven't figured out quite was is going on with all this weirdness, not to worry.  Unless you are intending to become a JavaScript scholar, there's really no reason to commit to memory the arcane rules surrounding JavaScript's coercion fetishes.  However, from this day forth, there is one thing that you need to remember: _there is almost no reason to ever use the `==` operator_.  Do yourself a favor and just get that tattooed somewhere.  The reason why this is the case is because JavaScript does a funny thing called _coercion_ (yeah, I mentioned that word before while pretending you actually knew what it meant... :trollface:).  If you're using the `==` operator, just know that you're giving JavaScript much more leeway to do what it pleases. If you execute the expression `x == y` in JavaScript, but `x` and `y` are not the same type (e.g. perhaps one is a number `42` and the other is string `"I am a baNAna"`), JS is going to try (mainly through the all-seeing eye API of [Theresa Caputo](https://en.wikipedia.org/wiki/Long_Island_Medium)) to convert the results of the expressions on either side of the equality operator into the same type before comparing them.  Needless to say, its methods for doing so are not intuitive.  For example, when JS tries to convert the string "" into a number, it converts it to 0.  A similar thing happens when trying to convert an empty array (`[]`) into a string.  Less strangely (but still very surprising), when something that is **NOT** a boolean type is compared with something that **IS** a boolean type, both arguments are converted to numbers.  "Truthy" values result in a `1`, but "falsy" values result in a `0`.

Hence the weirdness of `false == [];` => `true`.

You can read a bit more about coercion [here](http://webreflection.blogspot.com/2010/10/javascript-coercion-demystified.html), but don't jump on the bandwagon and start making a big deal about how stupid JS is.  Coercion is the process of making one type of data become another type (e.g. making an `object` a `string` or a `string` a `number`.  Coercion does have some non-intuitive results and behaviors, but if you were a true nerd and actually read the ECMAScript Spec, you would find that this behavior is not only known about but is specifically delineated.  Be a good programmer: know of the idiosyncrasies, avoid the common pitfalls, educate others, and don't bitch.

## Truth'y' and Fals(e)?'y' Values
"Truthy" and "falsy" sound like pretty abstract concepts, but soon enough you'll be right at home with them.  The best way to think about them is to imagine what happens in the expression of an if-statement:

```javascript
if (/*expression*/) {
  console.log("Wow, this expression is SO truthy!");
}
```

Truthiness depends entirely on the language you're writing in.  In some languages, the only value which will cause "The expression is SO truthy" to appear in the standard out stream would be the value which is pointed to in memory for the one and only singular "true" value.  In many languages, particularly [dynamic](https://en.wikipedia.org/wiki/Dynamic_programming_language) languages like JavaScript, there are many expressions which will happily result in a value which will cause "The expression is SO truthy" to spew forth as the compiler flashes the above if-statement.  In fact, in JavaScript, the number of values which will trigger this result is infinite.  However, there are a finite number of expression results which will prevent this from happening -- six (`6`) results to be exact.  These results are as follows:
- `false`
- `undefined`
- `""`
- `0`
- `null`
- `NaN`

Hopefully you are reasonably familiar with some of the above values if you've done anything with JS before.  And if you've read other people's code, you may have seen some people "hacking" this weird behavior to their benefit.  A very common use of this behavior the following example:

Assume that the variable `userNames` is empty (i.e. `userNames = []`).

```javascript
if (userNames.length) {
  Analytics.sendData({ event: "LogUserName", fullName: userNames.join(" ")});
}
```

The intention of the above is that if (for some reason) the array `userNames` was empty, it probably means that we don't have any useful analytics to log.  Thus, let's not send any data.  **IF** there is no data to log (i.e. `userNames` is empty), what will be the result of the expression `userNames.length`?  Got your guess?  Do you see it in the above list of _falsy_ values?  If so, pat yourself on the back.

Calling `.length` on an empty array will evaluate to a value of `0`.  Because `0` is _falsy_, the code nested inside the if-statement will not run.

### :smoking: **+** :bomb: =  :hurtrealbad: **TIP!** Don't
**Full disclosure: what appears in these 'Smoking Around Bombs is Probably Not a Good Idea' types of sections will generally reflect my personal opinion on best-practices for development settings with more than one person.  I'm going to include these opinions because of real-life problems which I have experienced as a result of development practices like these...**

If you're going to use slightly obscure code like the example above to save a few extra bits on your JS file size, think very carefully about how it may impact other people who may even have the slightest chance of touching your code.  If you're the only one maintaining the code you're writing, then by all means, do whatever the hell you want.  Look as cool as you want, bend the rules to your whim, because chances are you're not impressing anyone other than yourself anyways.  However, in a collaborative development environment, things like this can cause trouble.

In the specific example above, the expression `userNames.length` evaluates to 0 and thus bypasses the code nested in the if-statement.  While this result may be completely intuitive to you, another member of your development team may not be as fluent in JS as you are.  Indeed, she or he may be accustomed to more static structures where only the Boolean type `false` (or `False`) would bypass the if statement.  Even in other dynamic languages... Ruby for instance... `if (0)` will still run the code nested inside the if-statement.

So, before you start using idiosyncratic shortcuts like the one in the example above, think about whether looking like a badass is worth the three hours of debugging time your teammate had to endure because he was not as fluent in JavaScript-specific logic as you are.  My suggestion:

```javascript
if (userNames.length === 0) {
  console.log("OMG!  That expression is so intuitive and unambiguous!  And I'll still feel the same way if I never see this in standard out.");
}
```

## TL;DR
Avoid coercion.  The generally accepted practice within the JavaScript community is to use the `===` and `!==` operator basically 100% of the time.  Because of all the idiosyncrasies which govern how the compiler determines which operand to attempt to cast into a new data type and the result of that typecast, using the `==` operator is a little like playing Russian roulette.  Except it's worse, because if you lose at Russian roulette, you don't have to figure out _why_ the gun went off.

Beyond that, (and this is more of a generalization and certainly skirting into personal opinion), I find it easier to debug errors which are happening because `===` is triggering a false-negative in conditional logic than the absurdity which comes about from the false-positive which `==` is more inclined towards.  The result?
- :thumbsdown: `==`
- :thumbsup: `===`
- :thumbsdown: `!=`
- :thumbsup: `!==`

And now you've got another tattoo to get.

## :books: Exercise
You know you wanna... [click](https://github.com/johnochs/Learning-JS/tree/master/logic/exercises/coercion-and-truthiness.js).
