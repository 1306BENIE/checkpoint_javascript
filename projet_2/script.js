/*==================================|
|  String Manipulation Functions    |
|                                   |
|==================================*/

/* Reverse a String: Write a function that reverses a given string.*/
function reverseString(str){
    return str.split('').reverse().join('');
};
console.log(reverseString('chaine'));
/*==================================== END =============================================*/

/* Count Characters: Create a function that counts the number of characters in a string. */
function countCharacters(str) {
    return str.length;
  }
console.log(countCharacters('chaine'));
/*====================================== END ===========================================*/


/* Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.*/
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  console.log(capitalizeWords('chaine'));
/*==================================== END =============================================*/

/*==================================|
|          Array Functions          |
|                                   |
|==================================*/
/* Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.*/
// Find Maximum
function findMax(arr) {
  return Math.max(...arr); 
}

console.log(findMax([1, 2, 3]));

// Find Minimum

function findMin(arr) {
  return Math.min(...arr); 
}

console.log(findMin([1, 2, 3]));
/*==================================== END =============================================*/


// Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0); 
}

console.log(sumArray([1, 2, 3]));

/*==================================== END =============================================*/

// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
  return arr.filter(condition); 
}
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0));

/*==================================== END =============================================*/

/*==================================|
|    Mathematical Functions         |
|                                   |
|==================================*/

// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
/*==================================== END =============================================*/

// Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/*==================================== END =============================================*/

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(n) {
  const sequence = [0, 1]; 
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]); 
  }
  return sequence;
}
/*==================================== END =============================================*/




























