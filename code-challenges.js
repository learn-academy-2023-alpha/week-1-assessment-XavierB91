// // // ASSESSMENT 1: Coding Practical Questions

// // // To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// // // Pseudo coding your process is required.

// // // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// // // Pseudo code:

// // // Set one:
// // const fruit1 = "apple"
// // const fruit2 = "banana"
// // // Expected outcome: "banana"

// // // Set two:
// // const fruit3 = "cherry"
// // const fruit4 = "kiwi"
// // // Expected outcome: "cherry"

// // --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// // Pseudo code: function: name is boilPoint
// //parameters: will use three variables to test if given number is below, at or above boiling point. Boiling point is fixed variable at 212 degress fahrenheit,
// //Expected outcomes will be determine if given numbers match parameters

//  const temp1 = 42
// // Expected output: "42 is below boiling point"

//  const temp2 = 350
// // Expected output: "350 is above boiling point"

//  const temp3 = 212
// // Expected output: "212 is at boiling point"
// const boilingPoint=(num)=>{
//         if(num==temp1){
//             return` Temperature  is below boilingpoint `
//         }
//         else if(num>=temp2){
//             return` Temperature is above boiling point`
//         }
//         else if(num>=temp3){
//             return` Temperature is at boiling point`
        
//         } else 
//         return `please input temperature!`
     
//     }
//     console.log(boilingPoint(42))
// console.log(boilingPoint(212))
// console.log(boilingPoint(350))
// console.log(boilingPoint(20))


// output:  
// Temperature  is below boilingpoint 
//  Temperature is at boiling point
//  Temperature is above boiling point
// please input temperature!





// // --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// // Pseudo code:  input: function will be named padresCombinedRuns
// parameters: will used two arrays as argument
//expected output : 9 

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// const padresCombinedRuns =padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(padresCombinedRuns.length)

// output : 9


// Expected output: 9

// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// // Pseudo code: Input: function name will be currentCohortAlpha, input will use string as test variable. I will use the command .reverse to get the expected outcome. 

// const currentCohort = "Alpha 2023"
// const currentCohortAlpha= currentCohort.split("").reverse().join("")
// console.log(currentCohortAlpha)

// output : 3202 ahplA




// Expected output: "3202 ahplA"




// // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// // Pseudo code: function name : myNumbers: Parameters: will use single array with numbers as elements to determine index vaule.  Will implement lastIndexof to achieve desired result. 

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]


// console.log(myNumbers.lastIndexOf(42))
// const givenValue1 = 42
// // // Expected output: 7

// // output : 7 

// console.log(myNumbers.lastIndexOf(10))
// const givenValue2 = 10
// // // Expected output: 8

// // Output:8 






// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Pseudo code: input : function names will be sanDiegoSummerTemperature and sanDiegowinterTemperatures. Paramters, use all numbers with the array to create a list ordering the numners from largest to smallerst.

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76];
// sanDiegoSummerTemperatures.sort((a,b) => {
//     if(a > b) return -1;
//     if(a < b) return 1;
//     return 0;
// })
// console.log (sanDiegoSummerTemperatures)

// // Expected output: [82, 80, 79, 77, 76, 73, 72]
// // output 82, 80, 79, 77,
//   76, 73, 72
// 

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // // Expected output: [68, 67, 66, 66, 62, 59, 59]
// sanDiegoWinterTemperatures.sort((a,b) => {
//     if(a > b) return -1;
//     if(a < b) return 1;
//     return 0;
// })
// // console.log (sanDiegoWinterTemperatures)
// // // 68, 67, 66, 66,
// //   62, 59, 59
// // ]