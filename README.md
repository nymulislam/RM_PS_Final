# Remontada Final Problem Solving Task

This repository contains my solutions for the Remontada Final Problem Solving Task, written in JavaScript.

All 25 solutions are in a single file: **`RM_PS_Final.js`**

## Problems Covered

| # | Function | Description |
|---|----------|-------------|
| 01 | `solveMeFirst` | Sum of two integers |
| 02 | `multiply` | Product of two numbers |
| 03 | `evenOrOdd` | Returns "Even" or "Odd" |
| 04 | `makeNegative` | Returns the negative of a number |
| 05 | `opposite` | Returns the opposite of a number |
| 06 | `simpleArraySum` | Sum of all numbers in an array |
| 07 | `sleepIn` | Sleep in if not a weekday or on vacation |
| 08 | `monkeyTrouble` | Both monkeys smiling or neither smiling |
| 09 | `sumDouble` | Sum, doubled if both numbers are equal |
| 10 | `diff21` | Difference from 21, doubled if over 21 |
| 11 | `parrotTrouble` | Talking parrot outside hours 7 to 20 |
| 12 | `makes10` | Either number is 10 or their sum is 10 |
| 13 | `nearHundred` | Within 10 of 100 or 200 |
| 14 | `posNeg` | One positive and one negative (or both negative) |
| 15 | `notString` | Adds "not " to the start of a string |
| 16 | `compareTriplets` | Compares two triplets and returns both scores |
| 17 | `aVeryBigSum` | Sum of very large integers |
| 18 | `staircase` | Right-aligned staircase using `#` |
| 19 | `gradingStudents` | Rounds grades to the next multiple of 5 |
| 20 | `timeConversion` | 12-hour time to 24-hour time |
| 21 | `repeatStr` | Repeats a string n times |
| 22 | `solution` | Reverses a string |
| 23 | `positiveSum` | Sum of positive numbers in an array |
| 24 | `summation` | Sum of integers from 1 to n |
| 25 | `booleanToString` | Converts a boolean to a string |

## How to Run

You need [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Open a Node console and load the file:
   ```bash
   node
   > const solutions = require("./RM_PS_Final.js");
   > solutions.solveMeFirst(2, 3)
   5
   > solutions.staircase(4)
   '   #\n  ##\n ###\n####'
   ```

## Examples

| Function | Input | Output |
|----------|-------|--------|
| `solveMeFirst` | `2, 3` | `5` |
| `evenOrOdd` | `7` | `"Odd"` |
| `diff21` | `25` | `8` |
| `compareTriplets` | `[5, 6, 7], [3, 6, 10]` | `[1, 1]` |
| `gradingStudents` | `[73, 67, 38, 33]` | `[75, 67, 40, 33]` |
| `timeConversion` | `"07:05:45PM"` | `"19:05:45"` |
| `repeatStr` | `3, "ha"` | `"hahaha"` |

## Notes

- Function names and parameters match the task template exactly.
- Variables are declared with `let` and `const`.
- Everything is in one file, as required by the task rules.
