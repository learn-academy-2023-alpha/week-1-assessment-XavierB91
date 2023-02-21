// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: the command will log  the number 5. 

// b) Verify and explain: .push is a mutator that changes the array by adding a value onto the end of the array. The varible and the .push method will show 5 represnting the length of the array. 5 acts as index place holder for "indigo" at the end of the array. 

// --------------------1) What will this log?

// const cohort = "LEARN 2023"
// console.log(cohort.length) 

// a) Your answer: this input will log the number 10.
// b) Verify and explain: .length list out the number of elements within the variable. the length is always the last index of the array plus 1. The last index of "LEARN 2023" is 9.

// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:the input will log the letter o.
// b) Verify and explain: the 4 within the array represents the index at with the letter o sits withing the array. Based on the which number is inputed it will return a certain vaule.

// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: the input will log the lanuguage "ruby"
// b) Verify and explain: the command index will give you the first occurance of the an element within an array. Ruby appears as 1 on the index. 

// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase("sunday"))

// a) Your answer: the input will log the phrases "saturday" and "sunday" as "SATURDAY" and "SUNDAY"
// b) Verify and explain: I expected an output will be all capital letters, because .toUpperCase( ) returns the vaule of whatever you input as Capital case letters.  However, I received an .toUpperCase is not a function error message after entering various strings. To be honest I don't understand why I'm receiving this error. 

// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: the output for this log will be the data type "number"
// b) Verify and explain:The command typeof and dataTypes variable is logging the array as a one single data type that being string.  The input is giving me the first indexed element within the array "number"
