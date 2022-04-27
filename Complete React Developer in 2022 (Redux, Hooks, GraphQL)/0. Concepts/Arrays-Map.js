/* 
Array Methods:

map();
filters();
reduce();
find();
include();
*/


const myArray = [1, 2, 3, 4, 5]

/* Lets add one to each of the elemtns so the final array would be [2, 3, 4, 5, 6]
   One method of accomplishing this is to use a for-loop  
   Another method is to use the map*/

myArray.map(element => element +1);        // myArray is still equal to [1, 2, 3, 4, 5]
myArray.map(value => value +1);            // myArray is still equal to [1, 2, 3, 4, 5]
myArray.map(ele => ele +1);                // myArray is still equal to [1, 2, 3, 4, 5]
myArray.map(e => e +1);                    // myArray is still equal to [1, 2, 3, 4, 5]



// if you want to capture the data you must assigne it to a new array variable
const myArray2 = myArray.map(e => e +1);   // myArray is still equal to [2, 3, 4, 5, 6] 


