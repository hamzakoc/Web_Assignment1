Introduction

Goals and Outcomes
• Write decision-making statements and control structures to solve problems
• Apply programming logic to solve basic to intermediate problems
• Testing and debugging

Description
In this assignment, you are going to create a JavaScript file containing eight functions.
Each function needs to be considered as an individual problem, and you just focus on that one problem when you code the function.
No validation is required for the input – assume all the inputs are valid, but your code should be error-free.
What to implement?
• Create only one JavaScript file named as your student id-functions.js (i.e, 101010101-functions.js where 101010101 would be your student id)
• All the functions you implement must be placed in STUDENTID-functions.js, and you are not allowed to use any external file/library or built-in functions. Using extra file or library results in recieving zero for your assignment. To help you get started we have provided the structure of functions. You just need to complete the code in each function.
Function 1: Student info
a. Store the following information in individual variables:
a. your first name,
b. last name
c. student id
d. favourite colour
e. favourite game
f. number of courses (this semester)
b. Write a if condtion to evaluate the value of courses variable and assign the value “full” or “part” into a variable. If the number of couses you take is grater than 3, it should set to “full”, otherwise, it should be “part”. So in the sentence it would read: full-time or part-time.
c. Usign the values of variables initialized above, output your info to the browser console like so: "My name is ??? ???, student id: ???. My favourite colour is ??? and favourite game is ???. I’m currently taking ??? courses, so I am a ???-time student." (NOTE: The “???”s should be replaced with the value of variable initialized above or it’s calculated value. This also applies to all other outputs containing ??? listed in this Assignment).
Sample output in the log:
Function 2: Calculate total cost function name (price, qty, taxRate)
a. Three numbers (decimal values) are passed to this function. First parameter holds the unit price of an item. Second parameter holds the quantity ordered and last parameter holds the tax rate to be applied. Your task is to calculate the subtotal, tax, total cost and display your output in console as in sample below (values should be rounded to two decimal place for display purposes):
Sample output when values (2.65, 3, 0.1) are passed to this function:
Function 3: Multiply each digit by function name (num, multiplyBy)
a. Use the digits of first number passed to this function to multiply
by the second number passed to the function and display the results separated
by comma (as shown in sample below) as one string.
Sample output when (123, 3) were passed to this function:
Function 4: date difference in days function name (date)
b. If date passed to the function is in the passed, display how many day is passed and if it is in the future, display how many days left to that date. Pay attention to the singular & plurar day vs days when is more than one day
Sample output when a future date is passed to this function:
Sample output when a date in the past is passed to this function:
Function 5: Sum of all Even numbers function name (str)
a. This function receives an string. Your task is to find all even numbers (digits) and sum them up then display the total value in console. For example if following string is passed to this function “112, sf34, 4)-k )”
Result should be:
Function 6: Sorting string function name (str)
a. This function receives an string. Your task is loop through the each character of the string and separate all digists/letters/special characters. Display all letters at the beginning, followed by digits then the special chars then display result in console. For example if following string is passed to this function “ha1m2i3l:n)”
Result should be: 123hamin:)
Function 7: Multiply or add each digit by function name (num, str)
a. The digits of the first number will be Added or Multiplied based on the string passed (add/multiply) and display the results in the console. For example if the string (1234, “add”) is passed to this function.
Result should be:
The sum of 1234 is 10.
if followings are passed to this function (1234, “Multiply”)
Result should be:
The product of 1234 is 24.
Function 8: Cerate list items function name (list)
a. Create an unordered list where items are the elements of array passed to this function.
For example if array [“A”, “B”, “C”, “D”] is passed to this function, your output would be
<ul><li>A</li><li>B</li><li>C</li><li>D</li></ul>
Function 9: 3-letter word scrambler function name (str)
a. Determine if the word is not 3 characters
a. if not, display the Number value of zero in console
b. if so, store all possible unique combinations of the word scrambled in an array and display the array content in console.log
For example if the string is "The", your array would contain: ["The","ehT","hTe","Teh","heT", "eTh"]
Function 10: Word-point generator function name (str)
a. Generate a sum of points for characters in string using this formula:
2 points for a vowel
5 points for any one of these consonants: J, Q, Z, X, Y
3 points for other consonants
Multiply the point values for consecutive letters
For example
if the string is "apple", your output would be
= 2 + (3 + 3) x 2 + 3 + 2 = 19
if the string is "zerojjjigg", your output would be
= 5 + 2 + 3 + 2 + (5 + 5 + 5) x 3 + 2 + (3 + 3) x 2 = 71
