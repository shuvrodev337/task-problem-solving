// Solution of 7 problems out of 8, using Javascript 
// Please uncomment the console.log commands to see outputs

// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(string){
let reversed = []
for (let i = string.length-1; i >= 0 ; i--) {
    const element = string[i];
reversed.push(element)
    
}
let reversedString = reversed.join('')
return reversedString
}

// console.log(reverseString('hello world'));


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


function positiveNumSum (array){
    let sumOfPositiveNumbers = 0
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num > 0) {
            sumOfPositiveNumbers = sumOfPositiveNumbers + num
        }
        
    }
    return sumOfPositiveNumbers
}
// console.log(positiveNumSum([2, -5, 10, -3, 7]));


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Pass

  
  
// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(array, target) {
    let first = 0;
    let last = array.length - 1;
  
    while (first < last) {
      const sum = array[first] + array[last];
  
      if (sum === target) {
        return [first, last];
      } else if (sum < target) {
        first++;
      } else {
        last--;
      }
    }
  
    return [];
  }
  const sortedArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
//   console.log(findTwoNumbersWithSum(sortedArray, targetValue));

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
    if (operator == "+") {
      return num1 + num2;
    } else if (operator == "-") {
      return num1 - num2;
    } else if (operator == "*") {
      return num1 * num2;
    } else if (operator == "/") {
      return num1 / num2;
    }
  }
//   console.log(calculator(5, 5, "+"));

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(passwordLength) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+{[]}|;:'\",./?";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  }
//   console.log(generateRandomPassword(6));


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(roman) {
    const romanNumeral = {"I": 1,"V": 5,"X": 10,"L": 50,"C": 100,"D": 500,"M":1000,};
  
    let total = 0;
    let prev = 0;
    for(let i = roman.length - 1; i >= 0; i--){
      const currentChar = roman.charAt(i);
      const current = romanNumeral[currentChar];
      if(current < prev){
        total -= current;
      }else{
        total += current;
      }
      prev = current;
    }
    return total;
  
  }
//   console.log(romanToInteger('XXXI'));



// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.



function find2ndSmallest(array){
    if(array.length < 2){
      return 'single element in array';
    }
    array.sort((a,b) => a-b)
    return array[1]
  }
//   console.log(find2ndSmallest([1,6,5,4,2,3,9]));