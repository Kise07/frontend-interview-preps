# Ternary Operator Explained

The **ternary operator** is a shorthand way of writing a simple `if-else` expression.

---

## Why Is It Called "Ternary"?

"Ternary" means **having three parts**. The operator uses three operands:

```text
condition ? value_if_true : value_if_false
```

1. A condition
2. What to return if the condition is true
3. What to return if the condition is false

---

## Basic Syntax

In languages like JavaScript, Java, C, C++, C#, and many others:

```javascript
condition ? expression1 : expression2
```

This means:

```javascript
if (condition) {
    result = expression1;
} else {
    result = expression2;
}
```

---

## Example 1: Even or Odd

### Using `if-else`

```javascript
let number = 8;
let result;

if (number % 2 === 0) {
    result = "Even";
} else {
    result = "Odd";
}

console.log(result);
```

### Using Ternary Operator

```javascript
let number = 8;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);
```

### Output

```text
Even
```

The ternary version performs the same logic in a single line.

---

## Example 2: Age Check

### Using `if-else`

```javascript
let age = 20;
let message;

if (age >= 18) {
    message = "Adult";
} else {
    message = "Minor";
}
```

### Using Ternary Operator

```javascript
let age = 20;

let message = age >= 18 ? "Adult" : "Minor";
```

Read it as:

> If age is at least 18, return `"Adult"`; otherwise return `"Minor"`.

---

## How It Works Internally

Consider the following example:

```javascript
let score = 75;

let status = score >= 50 ? "Pass" : "Fail";
```

### Step 1: Evaluate the Condition

```javascript
score >= 50
```

Result:

```javascript
true
```

### Step 2: Choose the True Expression

Since the condition evaluates to `true`, the following value is selected:

```javascript
"Pass"
```

### Final Result

```javascript
status = "Pass";
```

---

## Example 3: Using Ternary Inside Output

```javascript
let loggedIn = true;

console.log(loggedIn ? "Welcome!" : "Please log in.");
```

### Output

```text
Welcome!
```

---

## Nested Ternary Operator

You can chain multiple conditions together.

```javascript
let marks = 85;

let grade =
    marks >= 90 ? "A" :
    marks >= 75 ? "B" :
    marks >= 60 ? "C" :
    "D";

console.log(grade);
```

### Output

```text
B
```

### Equivalent `if-else` Version

```javascript
if (marks >= 90) {
    grade = "A";
} else if (marks >= 75) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else {
    grade = "D";
}
```

---

## When to Use the Ternary Operator

### ✅ Simple Decisions

```javascript
let access = isAdmin ? "Allowed" : "Denied";
```

### ✅ Assigning Values

```javascript
let color = darkMode ? "black" : "white";
```

### ✅ Inline Rendering (React)

```jsx
return (
  <div>
    {isLoggedIn ? "Dashboard" : "Login"}
  </div>
);
```

---

## When Not to Use It

Avoid ternary operators when the logic becomes difficult to read.

### ❌ Hard to Read

```javascript
let result =
    condition1
        ? condition2
            ? value1
            : value2
        : condition3
            ? value3
            : value4;
```

### ✅ Better Alternative

```javascript
if (condition1) {
    if (condition2) {
        result = value1;
    } else {
        result = value2;
    }
} else if (condition3) {
    result = value3;
} else {
    result = value4;
}
```

Readable code is usually better than compact code.

---

## Real-World Example

Imagine an e-commerce application:

```javascript
let stock = 5;

let message = stock > 0 ? "In Stock" : "Out of Stock";

console.log(message);
```

### Output

```text
In Stock
```

If `stock` is `0` or less:

```text
Out of Stock
```

---

## Quick Mental Model

Whenever you see:

```javascript
condition ? A : B
```

Read it as:

> **If the condition is true, use A; otherwise use B.**

Example:

```javascript
let max = a > b ? a : b;
```

This means:

> If `a > b`, use `a`; otherwise use `b`.

---

## Key Takeaways

* The ternary operator is a concise alternative to a simple `if-else`.

* Syntax:

  ```javascript
  condition ? valueIfTrue : valueIfFalse
  ```

* Best used for:

  * Simple conditional assignments
  * Inline rendering
  * Short decision-making expressions

* Avoid deeply nested ternary expressions because they reduce readability.

The ternary operator is one of the most commonly used operators in JavaScript, React, Java, C++, C#, and many other programming languages because it makes simple conditional logic concise and expressive.

