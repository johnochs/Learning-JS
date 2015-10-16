# JavaScript Operators
#### :heavy_minus_sign: :heavy_division_sign: **== != === !==**<br>
**Assigned Reading:** [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators), [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity)

I decided to cover this because logic is used so frequently to control the flow of code execution and test for conditions.  You may have noticed this if you've looked through our React code: we are frequently using logic to test things like whether or not we should render a particular component.

_For instance..._

```JavaScript
if (this.state.bookmarksMode === "DISCOVER" && this.state.selectedRoomItem) {
    ... then do something here.
}
```

I'm going to assume you know about controlling the flow of code with an if-statement.  If not, review that [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).  In our code, if-statements are most likely the place you will see logical operators (`&&`, `||`, `!` ).

Let's go through these one by one.

## `&&` (Logical AND)
This operator takes too expressions as arguments.  An [_expression_](https://en.wikipedia.org/wiki/Expression_(mathematics)) is just a fancy way of saying a mathematical statement.  (e.g. `5 + 2 * 3` is an expression as<br>is `true` as is `5 / 2`, as is `3` by itself).

For now let's think entirely in booleans (true and false).

```JavaScript
true && true
=> true
```

(`=>` is shorthand for showing the return value... this is what the computer outputs.)  Verify that this is the case by typing the above expression into [repl.it](https://repl.it/languages/javascript).  (Use use the black window for simple stuff like this and hit return to evaluate the expression.)

What happens if you test the following expression?<br>`true && false`

You can see now how the && operator works:<br>_expr1_ `&&` _expr2_

If expression 1 evaluates to true and expression 2 evaluates to true, then our && operator will return true as well!  In fact, this is the only way to get it to return true.  If either of the expressions on either side of the && operator evaluate to false, then the && operator returns false.


Try to predict the result of the following expressions and then test them out in [repl.it](https://repl.it/languages/javascript) to make sure your prediction was correct.

```JavaScript
// Example 1
false && false
// Example 2
!false && false
// Example 3 (What do the right and left-hand expressions evaluate to individually?)
(1 > 2) && (3 < 4)
// Example 4
(1 >= 1) && (4 <= 4)
// Example 5
(3 + 4 == 7) && (5 * 3 < 14)
// Example 6
true && true && !true
```

## `!` (Logical NOT)
What if we wanted to test to make sure that two expressions are not true, but rather they are both false?  Well, we have to convert `false` values to `true`.  We do this with the `!` operator, formally known as the _logical NOT operator_.  Just as 'not true' is false, 'not false' is true.  So, think about the following expression for a second:

`!false` ... What would that evaluate to?<br>What about `!false && !false`?

In a sense, the `!` operator is just returning the opposite of the expression.

```
!true
=> false
!false
=> true
```

## `||` (Logical OR)
As the name suggests, the logical OR operator will return true so long as one of the expressions on its right or left side results in a truthy value.

```javascript
true || false;
=> true
false || true;
=> true
false || !false;
=> true;
```

Figure out what the result of the following script would be and then test it out in repl.it.

```javascript
var num = 3;
var isNumOdd = (num % 2 !== 0);
var isNumBig = (num > 5);

var result = isNumOdd || isNumBig;

console.log("The result is " + result + "!");
```


## Comparison Operators
I'm not going to get too deep into the relational operators.  You should recognize most of these from basic algebra.  I just want to briefly mention them since I used them in the above examples.

### Relational Operators

Operator | Name                  | Example
:------: | :-------------------- | :------------------------------------------
`>`      | Greater Than          | `4 > 3` (returns `true`)
`<`      | Less Than             | `4 < 3` (returns `false`)
`>=`     | Greater Than or Equal | `0 >= 0.000` => `false`, `0 >= 0` => `true`
`<=`     | Less Than or Equal    | I'm sure you get the idea...

### Equality Operators

Operator | Name                             | Example
:------: | :------------------------------- | :---------------------------------------------------------------------------------------
`==`     | Equality                         | `"string2" == "string1" => `false`, `"5" == 5` => `true`
`!=`     | Inequality                       | `"string2" != "string1"` => `true`, `0 != false` => `false` ***Wait, what?***
`===`    | Identity (Strict Equality)       | `"string1" === "string2"` => `false`, `"false" === false` => `false`
`!==`    | Non-Identity (Strict Inequality) | `"5" !== 5` => `true`, `new Object !== new Object` => `true` *...We'll talk about this.*

#### :warning: Notes About Testing Equality
In JavaScript, testing for equality is no trivial task.  However, when you think about it, the entire concept of equality is quite confusing... particularly when we are comparing things other than numbers.  If we have one array and a second array which contain different things, are they equal?  They are both arrays... but they are not the same array... and their contents are not equal.  What should be the outcome of that comparison?  What about the following example:

```javascript
var thing1 = "Hello!";
var thing2 = "Hello!";

string1 === string2;
```

What is it _exactly_ that we are comparing?  Do we want to know if `thing1` and `thing2` are both string types?  Or maybe if each character at each position in the string is exactly the same?  Or do we want to know if both `thing2` and `thing1` point at exactly the same address in memory?  Given that ambiguity, JavaScript tries to help us out by guessing what it is that we are trying to compare.  Unfortunately, anytime you let a computer guess about what its user's intent is, very confusing things can end up happening.

## :books: Exercise
To see this confusion in action, open up the [exercise](https://github.com/johnochs/Learning-JS/tree/master/logic/exercises/operators.js).  Inside are a number of expressions which will serve as experiments.  Run each line one at a time in the black interface in [repl.it](http://repl.it/languages/javascript) while trying to anticipate what the result would be.  You will not get a 100%.  Jot down anything that is confusing and we will discuss it during lecture.  If you just can't wait that long, you can continue on to the next lecture which may be helpful in explaining some of the strange behavior you're seeing.
