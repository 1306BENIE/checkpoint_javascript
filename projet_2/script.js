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

















































