let firstName = "Hamza";
let lastName = "Koc";
let studentId = 101274109;
let favoriteColor = "blue";
let favoriteGame = "Call of Duty";
let numberOfCourses = 7;
let outPut = '';


function _one() {

    if (numberOfCourses > 3) {
        outPut = "full";
    } else {
        outPut = "part";
    }
    //below code output adjusted to stand in same column with \n and \t
    console.log(`\t \t\t\t My name is ${firstName} ${lastName}, student ID: ${studentId}.\n
                 My favorite color is ${favoriteColor} and favorite game is  ${favoriteGame}. \n
                 I am currently taking ${numberOfCourses} courses, so I am a ${outPut}-time student. `);
}


function _two(price, qty, taxRate) {
    console.log(price, qty, taxRate);
    let totalSale = price * qty;
    let totalTax = (totalSale * taxRate);
    let totalAfterTax = totalSale + totalTax;
    //only got two decimal after . witt toFixed
    console.log(`Sub total: $${totalSale.toFixed(2)}, Tax: $${totalTax.toFixed(2)},Total: $${totalAfterTax.toFixed(2)}`);

}




function _three(num, multiplyBy) {
    //All passed numbers separated and passed in a new array as number
    let myArry = Array.from(num.toString()).map(Number);
    let result = '';
    for (let i = 0; i < myArry.length; i++) {
        result += myArry[i] * multiplyBy + ',';
    }
    console.log(result);


}


function _four(date) {

    //computer date mont and year fetched
    var d = new Date();
    var todayDate = d.getDate();
    var todayMonth = d.getMonth() + 1;
    var todayYear = d.getFullYear();

    //passed date mont and year fetched
    var passedDate = date.getDate();
    var passedMonth = date.getMonth() + 1;
    var passedYear = date.getFullYear();

    //Difference of date calculated by hours and day
    date = new Date(passedYear, passedMonth, passedDate);
    date2 = new Date(todayYear, todayMonth, todayDate);

    passedDateTime = parseInt(date.getTime() / 1000);
    todayDateTime = parseInt(date2.getTime() / 1000);

    var dateDiff = passedDateTime - todayDateTime;

    var dateDiffInHours = dateDiff / 60 / 60;

    var dateDiffInDays = dateDiffInHours / 24;

    //conditions compared
    if (dateDiffInDays == -1) {
        console.log(`That day was ${dateDiffInDays} day ago`);

    } else if (dateDiffInDays < -1) {
        console.log(`That day was ${dateDiffInDays} days ago`);
    } else if (dateDiffInDays == 1) {
        console.log(`There is ${dateDiffInDays} day left to that date`);
    } else if (dateDiffInDays > 1) {
        console.log(`There is ${dateDiffInDays} days left to that date`);
    } else {
        console.log(`You are in today. No needed to count ${dateDiffInDays} `);
    }

}


function _five(str) {

    //Regular expression used to avoid nonsense words
    let onlyNumbers = str.replace(/\D/g, '');

    console.log(onlyNumbers);


}



function _six(str) {

    //Arguments converted to ASCII code to fetch their value and compare as valid value. 
    //All value separated by their numeric value and sorted end of the code
    var allString = "";
    var allNumbers = "";
    var allOthers = "";
    var output = "";
    var convertASCII = "";

    for (let i = 0; i < str.length; i++) {
        convertASCII = str.charCodeAt(i);

        if ((convertASCII >= 48 && convertASCII <= 57) || (convertASCII >= 65 && convertASCII <= 90) || (convertASCII >= 97 && convertASCII <= 122)) {
            if (convertASCII >= 48 && convertASCII <= 57) {
                allNumbers += str[i];
            }
            if ((convertASCII >= 65 && convertASCII <= 90) || (convertASCII >= 97 && convertASCII <= 122)) {
                allString += str[i];
            }
        } else {
            allOthers += str[i];
        }
        output = allNumbers + allString + allOthers;
    }
    console.log(output);

}

function _seven(num, str) {
    //Numbers passed to an array and each parameter of array used for calculation
    let add = 0;
    let multiply = 1;
    var numToArr = num.toString().split('');
    for (i = 0; i < numToArr.length; i++) {
        add += Number(numToArr[i]);
        multiply *= Number(numToArr[i]);

    }
    if (str == "add") {
        console.log(`The sum of ${num} is ${add}`);
    } else if (str == "multiply") {
        console.log(`The product of  ${num} is ${multiply} `);
    }

}


function _eight(list) {

    //Arguments passed to array 
    let newlist = "";
    let myArray = Array.from(arguments);

    for (let i = 0; i < myArray.length; i++) {

        newlist += '<li>' + myArray[i] + '</li>';

    }
    console.log('<ul>' + newlist + '</ul>');
    //This function '_eight' works when any or below arguments passed function in main.html1 however it does not work properly with main.html");//

}
//This arguments works
_eight("o", "y", "c", "d", "e");




function _nine(str) {

    //3 different for loop used for comparing equivalency

    if (str.length != 3) {
        console.log("The value is 0");
    } else {

        let output = "";

        for (let i = 0; i < str.length; i++) {

            for (let k = 0; k < str.length; k++) {

                if (i != k) {

                    for (var j = 0; j < str.length; j++) {

                        if (k != j && i != j) {
                            //Each combination taken and added
                            output += str[i] + str[k] + str[j] + ",";
                        }
                    }
                }
            }
        }
        console.log(output);
    }

}

function _ten(str) {
    let caseSens = Array.from(str.toUpperCase());

    let vowels = ["A", "E", "O", "I", "U"];
    let vovelValue = 0;

    let consonants = ["J", "Q", "Z", "X", "Y"];
    let consonantsValue = 0;

    let others = ["B", "C", "D", "F", "G", "H", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W"];
    let othersValue = 0;
    let sum = 0;

    for (let i = 0; i < caseSens.length; i++) {
        for (let j = 0; j < others.length; j++) {
            if (caseSens[i] === vowels[j]) {
                vovelValue += 2;

            }
            if (caseSens[i] === consonants[j]) {
                consonantsValue += 5;
            }
            if (caseSens[i] === others[j]) {
                othersValue += 3;
            }
        }

        sum += vovelValue + consonantsValue + othersValue;

        console.log(sum);
    }


}