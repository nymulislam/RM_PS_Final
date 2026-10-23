// Remontada Final Problem Solving Task
// All 25 solutions are in this one file.

// 01. Solve Me First
const solveMeFirst = function(a, b) {
  return a + b;
};

// 02. Multiply
const multiply = function(a, b) {
  return a * b;
};

// 03. Even or Odd
const evenOrOdd = function(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// 04. Return Negative
const makeNegative = function(number) {
  if (number > 0) {
    return -number;
  } else {
    return number;
  }
};

// 05. Opposite Number
const opposite = function(number) {
  return number * -1;
};

// 06. Simple Array Sum
const simpleArraySum = function(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  return sum;
};

// 07. sleepIn
const sleepIn = function(weekday, vacation) {
  if (weekday === false || vacation === true) {
    return true;
  } else {
    return false;
  }
};

// 08. monkeyTrouble
const monkeyTrouble = function(aSmile, bSmile) {
  if (aSmile === true && bSmile === true) {
    return true;
  }
  if (aSmile === false && bSmile === false) {
    return true;
  }
  return false;
};

// 09. sumDouble
const sumDouble = function(a, b) {
  if (a === b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
};

// 10. diff21
const diff21 = function(n) {
  if (n > 21) {
    return (n - 21) * 2;
  } else {
    return 21 - n;
  }
};

// 11. parrotTrouble
const parrotTrouble = function(talking, hour) {
  if (talking === true && (hour < 7 || hour > 20)) {
    return true;
  } else {
    return false;
  }
};

// 12. makes10
const makes10 = function(a, b) {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  } else {
    return false;
  }
};

// 13. nearHundred
const nearHundred = function(n) {
  if (Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10) {
    return true;
  } else {
    return false;
  }
};

// 14. posNeg
const posNeg = function(a, b, negative) {
  if (negative === true) {
    if (a < 0 && b < 0) {
      return true;
    } else {
      return false;
    }
  }
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return true;
  } else {
    return false;
  }
};

// 15. notString
const notString = function(str) {
  if (str.startsWith("not")) {
    return str;
  } else {
    return "not " + str;
  }
};

// 16. Compare the Triplets
const compareTriplets = function(a, b) {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice = alice + 1;
    } else if (a[i] < b[i]) {
      bob = bob + 1;
    }
  }
  return [alice, bob];
};

// 17. A Very Big Sum
const aVeryBigSum = function(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  return sum;
};

// 18. Staircase
const staircase = function(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let line = "";
    // spaces first
    for (let j = 0; j < n - i; j++) {
      line = line + " ";
    }
    // then the # signs
    for (let k = 0; k < i; k++) {
      line = line + "#";
    }
    result = result + line;
    // add new line except for the last row
    if (i < n) {
      result = result + "\n";
    }
  }
  return result;
};

// 19. Grading Students
const gradingStudents = function(grades) {
  const result = [];
  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    if (grade >= 38) {
      let nextMultiple = Math.ceil(grade / 5) * 5;
      if (nextMultiple - grade < 3) {
        grade = nextMultiple;
      }
    }
    result.push(grade);
  }
  return result;
};

// 20. Time Conversion
const timeConversion = function(s) {
  const period = s.slice(8); // AM or PM
  let hour = Number(s.slice(0, 2));
  const rest = s.slice(2, 8); // :mm:ss

  if (period === "AM" && hour === 12) {
    hour = 0;
  }
  if (period === "PM" && hour !== 12) {
    hour = hour + 12;
  }

  let hourString = String(hour);
  if (hour < 10) {
    hourString = "0" + hourString;
  }
  return hourString + rest;
};

// 21. String Repeat
const repeatStr = function(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result = result + s;
  }
  return result;
};

// 22. Reversed Strings
const solution = function(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
};

// 23. Sum of Positive
const positiveSum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
};

// 24. Grasshopper - Summation
const summation = function(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total = total + i;
  }
  return total;
};

// 25. Convert a Boolean to a String
const booleanToString = function(b) {
  if (b === true) {
    return "true";
  } else {
    return "false";
  }
};

// for testing (does nothing in the browser)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    solveMeFirst, multiply, evenOrOdd, makeNegative, opposite,
    simpleArraySum, sleepIn, monkeyTrouble, sumDouble, diff21,
    parrotTrouble, makes10, nearHundred, posNeg, notString,
    compareTriplets, aVeryBigSum, staircase, gradingStudents,
    timeConversion, repeatStr, solution, positiveSum, summation,
    booleanToString
  };
}
