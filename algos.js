
/**
 * Find the smallest and biggest numbers in an array
 * 
 * @param {number[0,1,2,3,4]} arr - The array to search
 * 
 * @returns {number[0,1]} - An array containing the smallest and biggest numbers in the array
 */


 function problemOne(arr)
 {   
     let smallestArr = arr[0]; //starts at first index of the array
     let biggestArr = arr[0];// starts at first index of the array

        for (let i = 0; i < arr.length; i++)    //loop through the array until the end of the array is reached
        { // arr[i] will be used as a placeholder for the index of the array
        //i ++ will increment the index by 1
            if (arr[i] < smallestArr)
            {
                smallestArr = arr[i]; // the new smallestArr will be set in the return statement
            }
            if (arr[i] > biggestArr)
            {
                biggestArr = arr[i]; // the new biggestArr will be set in the return statement
            }
        }   
 
     return [smallestArr, biggestArr]; // this will return the smallest and biggest numbers in the array
 }
 
 /**
  * Create a function that takes two numbers and returns the array of multiples of the first number until the array's last value reaches the second number.
  * If the second number is a multiple of the first number, it should be included in the array.
  * 
  * Example: problemTwo(7, 100) should return [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]
  * 
  * @param {number} num1 - The number to be multiplied
  * // this is the number set in the x position of the array
  * @param {number} num2 - The number to be reached
  * // this is the number set in the y position of the array
  * @returns {number[]} - The array of multiples
  * //this will return a display of numbers that are multiples of the first number  and <= endingNumber
  */
 function problemTwo(startingNumber, endingNumber) //problemTwo (x,y)
 {// START OF FUNCTION
     let multiplesArray = []; 
 // this is the array that will be displayed with the multiples of the first number
     for (let i = startingNumber; i <= endingNumber; i += startingNumber)
     {// END OF FOR LOOP this will loop through the array until the end of the array is reached
         multiplesArray.push(i);
     }// END OF FOR LOOP this will push the multiples of the first number into the array
 
     return multiplesArray;
 }// END OF FUNCTION
 
 /**
  * Create a function that finds all common elements between two arrays.
  * Example: problemThree([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]) should return [2, 4]
  * 
  * @param {number[]} arr1 - The first array to be compared
  * // this is the first array that will be compared
  * @param {number[]} arr2 - The second array to be compared
  * // this is the second array that will be compared
  * @returns {number[]} - The array of common elements
  * this will return the common elements between the two arrays
  */

 function problemThree(arr1, arr2)
 {// START OF FUNCTION
     let commonElements = [];// this is the array that will be DISPLAYED with the common elements between the two
     // arrays whether there is 0 or many common elements

        for (let i = 0; i < arr1.length; i++)
        {// END OF FOR LOOP this will loop through the first array until the end of the array is reached

            if (arr2.includes(arr1[i])){// this will check if the second array includes the first array
                commonElements.push(arr1[i]); 
            }// END OF IF STATEMENT this will push the common elements into the array

        }// END OF FOR LOOP this will loop through the first array
 
     return commonElements;//  this will return the common elements between the two arrays
 }
 
 
 /**
  * Create a function that takes a nested array and counts the total number of items in all the arrays.
  * Example: problemFour([1, [2, 3], [4, [5, 6]], [7, 8, 9]]) should return 9
  * 
  * @param {number[]} arr - The array to be counted
  * 
  * @returns {number} - The total number of items in the array
  */

 function problemFour(arr)
 {// START OF FUNCTION
     let count = 0; // this is the  count of the total number of items in the array
 
        for (let i = 0; i < arr.length; i++)
        {// END OF FOR LOOP this will loop through the array until the end of the array is reached

            if (Array.isArray(arr[i]))
            {// END OF IF STATEMENT this will check if the array is an array

                count += problemFour(arr[i]);
            }// END OF IF STATEMENT this will add the total number of items in the array

            else
            {// END OF ELSE STATEMENT this will add the total number of items in the array
                count++;

            }// END OF ELSE STATEMENT this will add the total number of items in the array
            
        }// END OF FOR LOOP this will loop through
 
     return count;
 }
 