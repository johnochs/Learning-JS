# JavaScript Logic and Equality!
## Coercion
If this is making you uncomfortable and you haven't figured out quite was is going on with all this weirdness, not to worry.  Just remember from this day forth that there is almost no reason to ever use the `==` operator.  This is because it does a funny thing called _coercion_.  If you're using the `==` operator, you're giving JavaScript much more leeway. If you execute the expression `x == y` in JavaScript, but `x` and `y` are not even the same type (e.g. perhaps one is a number `42` and the other is string `"I'm a string!"`), JS is going to try (somehow) to convert them into the same type before comparing them, and it's methods for doing so are not intuitive.  For example, when JS tries to convert the string "" into a number, it converts it to 0.  Similarly, when something that is **NOT** a boolean type is compared with something that **IS** a boolean type, both arguments are converted to numbers.  "Truthy" values result in a `1`, but "falsy" values result in a `0`.

Hence the weirdness of `false == [];` => `true`.

You can read a bit more about coercion [here](http://webreflection.blogspot.com/2010/10/javascript-coercion-demystified.html), but don't jump on the bandwagon and start making a big deal about how stupid JS is.  Coercion is the process of making one type of data become another type (e.g. making an `object` a `string` or a `string` a `number`.  Coercion does have some non-intuitive results and behaviors, but if you were a true nerd and actually read the JS Spec, you would find that this behavior is not only known about but is specifically spelled out.  Be a good programmer: know of the idiosyncrasies, avoid the common pitfalls, educate others, and don't bitch.

## Truth'y' and False?'y' Values
"Truthy" and "falsy" sound like pretty abstract concepts, but soon enough you'll be right at home with them.  The best way to think about them is what happens in the expression of an if-statement:

```javascript
if (/*expression*/) {
  console.log("The expression was truthy!");
}
```
