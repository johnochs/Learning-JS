## JavaScript Logic and Equality!

**Assigned Reading:** [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

I decided to cover this because logic is used so frequently to control the flow of code execution and test for conditions.  You may have noticed this if you've looked through our React code: we are frequently using logic to test things like whether or not we should render a particular component.

*For instance...*

```JavaScript
if (this.state.bookmarksMode === "DISCOVER" && this.state.selectedRoomItem) {
    ... then do something here.
}
```

I'm going to assume you know about controlling the flow of code with an 'if' statement.  If not, review that [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).

In our code, if-statements are most likely the place you will see the higest
occurance of logical operators (`&&`, `||`, `!` )

A quick run down of the important things about these operators:

&& (Logical AND)
__

This operator takes too expressions as arguments.  An [*expression*](https://en.wikipedia.org/wiki/Expression_(mathematics)) is just a fancy
way of saying a mathematical statement.  (e.g. `5 + 2 * 3` is an expression as
is `true` as is `5 / 2`, as is `3` by itself).

For now let's think entirely in booleans (true and false).

```JavaScript
true && true
=> true
```
(`=>` is shorthand for showing the return value... this is what the computer outputs.)  Verify that this is the case by typing the above expression into [repl.it](http://repl.it).  (Use use the black window for simple stuff like this and hit return to evaluate the expression.)

What happens if you test the following expression?
`true && false`

You can see now how the && operator works:
*expr1* `&&` *expr2*

If expression 1 evaluates to true and expression 2 evaluates to true, then our && operator will return true as well!  In fact, this is the only way to get it to return true.  If either of the expressions on either side of the && operator evaluate to false, then the && operator returns false.

What if we wanted to test to make sure that two expressions are not true, but rather they are both false?  Well, we have to convert `false` values to `true`.  We do this with the `!` operator, formally known as the *logical NOT operator*.  Just as 'not true' is false, 'not false' is true.  So, think about the following expression for a second:

`!false` ... What would that evaluate to?
What about `!false && !false`?

In a sense, the `!` operator is just returning the opposite of the expression.

```
!true
=> false
!false
=> true
```

Try to predict the result of the following expressions and then test them out in [repl.it](http://repl.it) to make sure your prediction was correct.

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
```

#### Comparison Operators
I'm not going to get too deep into most of these.  You should recognize most of these from basic algebra.

| Operator | Name | Example |
|----------|-|-|
