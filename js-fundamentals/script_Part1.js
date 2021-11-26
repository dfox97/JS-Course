// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// function BMI(height,mass) {
//     return (mass / (height ** 2 )).toFixed(2)
// }
// // Test data 1 :
// let markaMass = 78;//kg
// let marksHeight = 1.68;//m 

// let johnMass = 92; //kg
// let johnHeight = 1.95 // m

// let marksBMI = BMI(marksHeight,markaMass)
// let johnsBMI = BMI(johnHeight,johnMass)
// console.log(marksBMI,johnsBMI);
// let markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI);

// //Test data 2:
// marksMass = 95;//kg
// marksHeight = 1.88;//m 
// johnMass = 85; //kg
// johnHeight = 1.76; // m

// marksBMI = BMI(marksHeight,markaMass)
// johnsBMI = BMI(johnHeight,johnMass)
// console.log(marksBMI,johnsBMI);
// markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI);

//////////////////////////////////////////////////////////////////////////

// //Temperate literal 
// const firstName="Daniel";
// const job = "Graduate Software Engineer";
// const birthYear=1997;
// const year=2021;
// const dannyNew=`I'm ${firstName}, a ${job} who is ${(year - birthYear)} years old`;
// console.log(dannyNew);


// //multiline also works without /n
// console.log(`multi line string -
// using temperate literals`);


// //emojis and icons is windows key and .
// //make sure to define variables outside if else statement
// if(year - birthYear >= 18){
//     console.log(`You are above 18 🍺`);
// }else{
//     const yearsLeft=18-5;
//     console.log(`You are too young, you can drink in ${yearsLeft} years`);
// }


/////////////////////////////////////////////////////////////
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// function BMI(height,mass) {
//     return (mass / (height ** 2 )).toFixed(2)
// }
// // Test data 1 :
// let markaMass = 78;//kg
// let marksHeight = 1.68;//m 

// let johnMass = 92; //kg
// let johnHeight = 1.95 // m

// let marksBMI = BMI(marksHeight,markaMass)
// let johnsBMI = BMI(johnHeight,johnMass)

// let markHigherBMI = marksBMI > johnsBMI;
// if (markHigherBMI == true){
//     console.log(`Marks BMI is higher than Johns, Mark's BMI is ${marksBMI}, John has a BMI of ${johnsBMI}`);
// }
// else{
//     console.log(`Marks BMI is lower than Johns, John's BMI is ${johnsBMI}, whereas Marks BMI is ${marksBMI}`);
// }

// //Test data 2:
// marksMass = 95;//kg
// marksHeight = 1.88;//m 
// johnMass = 85; //kg
// johnHeight = 1.76; // m

// marksBMI = BMI(marksHeight,markaMass)
// johnsBMI = BMI(johnHeight,johnMass)
// markHigherBMI = marksBMI > johnsBMI;
// if (markHigherBMI == true){
//     console.log(`Marks BMI is higher than Johns, Mark's BMI is ${marksBMI}, John has a BMI of ${johnsBMI}`);
// }
// else{
//     console.log(`Marks BMI is lower than Johns, John's BMI is ${johnsBMI}, whereas Marks BMI is ${marksBMI}`);
// }


///////////////////////////////////////////////////////////////

// const inputYear='1991';
// console.log(Number(inputYear),inputYear);
// console.log(inputYear + 18);
// console.log(typeof NaN);
// //NaN means Not a Number e.g const inputYear='1999s' then Number(inputYear)  == NaN

// //type coercion
// console.log(`I'm a `+23+ ` Year old`);
// //console.log("23"-"10"+2);

// //5 falsy values: 0, undefined, '', null, NaN


// const favourite = prompt("Whats your favourite number?");
// console.log(favourite);
////////////////////////////////////////////////////////////////////////

//CODING CHALLENGE 3:

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// //96 + 108 + 89
// //97+112+101
// const dolphinData = 97 + 112 + 101;
// //88 + 91 + 110
// //109+95+123
// const koalasData = 109 + 95 + 106;

// const avgDolphinScore = (dolphinData / 3).toFixed(2);
// const avgKoalasScore = (koalasData / 3).toFixed(2);

// // if (avgDolphinScore > avgKoalasScore){
// //     console.log(`The winner is Dolphin, their average score is ${avgDolphinScore}, the Koalas average score is ${avgKoalasScore}.`);
// // }else if (avgDolphinScore < avgKoalasScore){
// //     console.log(`The winner is Koalas, their average score is ${avgKoalasScore}, the Dolphin average score is ${avgDolphinScore}.`);
// // }else{
// //     console.log(`Draw! Both scores are equal.`);
// // }



// //Bonus part 1 and 2:
// if (avgDolphinScore >= 100 || avgKoalasScore >= 100){
//     if (avgDolphinScore > avgKoalasScore){
//         console.log(`The winner is Dolphin, their average score is ${avgDolphinScore}, the Koalas average score is ${avgKoalasScore}.`);
//     }else if (avgDolphinScore < avgKoalasScore){
//         console.log(`The winner is Koalas, their average score is ${avgKoalasScore}, the Dolphin average score is ${avgDolphinScore}.`);
//     }else{
//         console.log(`Draw! Both scores are equal.`);
//     }
    
// }else{
//     console.log(`The team needs a minimum of 100 points in order to be eligble to win`);
// }
////////////////////////////////////////////////////////////

// const day = "monday";

// switch (day){
//     case 'monday' : //day === monday
//         console.log(`Today is Monday`);
//         break;
//     case 'tuesday':
//         console.log(`Today is Tuesday`);
//         break;
//     case 'saturday':
//     case 'sunday' :
//         console.log(`Weekend break`);
//         break;
//     }

//ternary operator
// const age = 23;
// const drink = age >= 18 ? 'Beer 🍺' : `Water`;
// console.log(drink);
///////////////////////////////////////////////////////////


//Coding Challenge 4:
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �


const bill = 430;
const tip = bill >=50 && bill <=300 ? 0.15*bill : 0.20 * bill; 
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);