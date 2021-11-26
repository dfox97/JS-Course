'use strict'
// //function declaration
// function logger(name) {
//     console.log(`My name is ${name}`);
// }

// //logger("danny");

// //function expression
// const nameLog = function (name){return  `This is my ${name}`};

// const nameLogger = nameLog("Danny");

// console.log(nameLogger);

// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }
//arrow expressions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirment = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirment = 65 - age;
//     //return retirment;
//     return `${firstName} retires in ${retirment} years`;
// }
// console.log(yearsUntilRetirment(1997,"Daniel"));

//functions inside functions

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// const cutFruitPieces = fruit => fruit * 4;

// function fruitProcessor(apples,organges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(organges)
//     const juice = `Juice with ${applePieces} and ${orangePieces}`;
//     return juice
// }
// console.log(fruitProcessor(3,4));

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �

// const calcAverage = (a,b,c) => ((a+b+c) / 3).toFixed(2);

// let dolphineAverage = calcAverage(44,23,71);
// let koalasAverage = calcAverage(65,54,49);
// //console.log(koalasAverage);
// function checkWinner(avgDolphine, avgKoalas) {
//     if (avgDolphine >= 2*avgKoalas){
//         console.log(`Dolphin wins (${avgDolphine} vs ${avgKoalas})`);
//     }
//     else if (avgKoalas >= 2*avgDolphine){

//         console.log(`Koalas wins (${avgKoalas} vs ${avgDolphine})`);
//     }
//     else{
//         console.log(`No team wins...`);
//     }

// }

// checkWinner(576,111)

// //test 2
// dolphineAverage = calcAverage(85,54,41);
// koalasAverage = calcAverage(23,34,27);
// console.log(dolphineAverage,koalasAverage);
// checkWinner(dolphineAverage,koalasAverage)

////////////////////////////////////////////////////////////////////
//Arrays

// const friend1='Michael';
// const friend2='Steven';
// const friend3='Peter';

// const friends = ['Michael','Steven','Peter'];

// // const years = new Array(1991,1984,2008,2020);

// // console.log(years[0], friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] ='Jay';
// console.log(friends);

// const myArr=['fox',2037-1997,'softwae dev',friends];
// console.log(myArr[3][0]);

// const calAge = function (birthYear){return 2037 - birthYear;}

// const years=[1990,1997,2002,2020,2010];

// const myNewArr = new Array();
// for(let i=0; i<years.length;i++){
//     //console.log(calAge(years[i]));
//     myNewArr.push(calAge(years[i]));
// }
// console.log(myNewArr);

//ARRAY METHODS
//const friends = ['Michael','Steven','Peter'];

// const NewARRAY = new Array();
// for(let i=0; i<friends.length;i++){
//     let last_elem=friends.pop();
//     NewARRAY.push(last_elem);
// }

// let final_elements=friends.pop();
// NewARRAY.push(final_elements);

// console.log(friends);
// console.log(NewARRAY);

// function flipArray(array, index){
//     let newArray = new Array()
//     let finalArray = new Array()
//     for(let i=0; i<array.length;i++){
//         if (i <= index-1){
//             newArray.push(array[i]);
//         }
//         else if (i>index-1){
//             finalArray.push(array[i]);
//         }

//     }

//     console.log(newArray);

//     finalArray=finalArray.concat(newArray);
//     console.log(finalArray);

// }
// flipArray(['Michael','Steven','Peter','James','Danny'],4);

// const friends=['Michael','Steven','Peter','James','Danny'];
// const newarr=('John','James')
// friends.unshift(newarr);
// const popped = friends.pop();
// //friends.shift();
// console.log(friends.indexOf('Jamu'));
// console.log(friends.includes('Steven'));
// console.log(popped);

////////////////////////////////////////////////////////////////

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// GOOD LUCK �

// const bills = [125,555,44];

// // function calcTip(bill){
// //     if (bill >= 50 && bill <=300){
// //         0.15*bill;
// //     }
// //     else{
// //         0.20 * bill;
// //     }
// // }
// // calcTip(bills);

// const calcTip = function (bill){
//     return bill >=50 && bill <=300 ? 0.15*bill : 0.20 * bill;
// };
// const tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// const totals=new Array();
// for(let i=0; i<bills.length;i++){
//     totals.push([bills[i]+tip[i]]);
// }

// console.log(`The bill was ${bills}, the tip was ${tip}, and the total value was ${totals}`);

////////////////////////////////////////////////////////////////////////
//Intro to Objects

// const myDataArray= [
//     'Daniel',
//     'Fox',
//     2037-1997,
//     'student',
//     ['James','Peter','Steven']
// ];

// //object with key value pairs (Dicts/ OO like in python)
// const dannyObject  = {
//     firstName : 'Danny',
//     lastName : 'Fox',
//     age : 2021 - 1997,
//     job : 'Student',
//     friends : ['James','Peter','Steven']
// };
// console.log(dannyObject.lastName);
// console.log(dannyObject['lastName']);

// const nameKey = 'Name';
// console.log(dannyObject['first'+nameKey]);
// // const interestedIn = prompt(`What do you want to know about Daniel ? Choose between firstName,lastName,age,job and friends`);
// // console.log(dannyObject[interestedIn]);

// dannyObject.location = 'England';
// dannyObject['twitter'] = '@dfox97';

// //challenge find num of friends
// console.log(`${dannyObject.firstName} has ${dannyObject.friends.length} and his best friend is ${dannyObject.friends[0]}`);

///////////////////////////////////////////////////////////////////

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

// const MarkObject = {
//     firstName : 'Mark',
//     lastName : 'Miller',
//     height : '1.8',
//     mass : '53',
//     calcBMI : function (){
//         this.BMI= (this.mass / this.height ** 2).toFixed(2);
//         return this.BMI;
//     }
// };
// const JohnObject = {
//     firstName : 'John',
//     lastName : 'Smith',
//     height : '1.5',
//     mass : '58',
//     calcBMI : function (){
//         this.BMI= (this.mass / this.height ** 2).toFixed(2);
//         return this.BMI;
//     }
// };

// MarkObject.calcBMI();
// JohnObject.calcBMI();
// console.log(MarkObject.BMI);

// // MarkObject['BMI'] = `${(MarkObject.mass / MarkObject.height ** 2).toFixed(2)}.`;
// // JohnObject['BMI'] = `${(JohnObject.mass / JohnObject.height ** 2).toFixed(2)}`;

// if(MarkObject.BMI > JohnObject.BMI){
//     console.log(`${MarkObject.firstName} ${MarkObject.lastName} has a Higher BMI (${MarkObject.BMI}) comapred to Johns BMI (${JohnObject.BMI})`);
// }else if (MarkObject.BMI < JohnObject.BMI){
//     console.log(`${JohnObject.firstName} ${JohnObject.lastName} has a Higher BMI (${JohnObject.BMI}) comapred to Marks BMI (${MarkObject.BMI})`);
// }else if (MarkObject.BMI == JohnObject.BMI){
//     console.log(`Both Marks and Johns BMI is the same (${MarkObject.BMI}),(${JohnObject.BMI})`);
// }

///////////////////////////////////////////////////////////////////////

// // for (let rep=1; rep<=10; rep++){
// //     console.log(`Lifting weights rep ${rep}`);
// // }

// const dannyArray = ['Danny','Fox',2037-1997,['James','Dave','Steven'],true];
// const types = []

// for (let i=0; i<dannyArray.length; i++){
//     console.log(dannyArray[i], typeof dannyArray[i]);

//     //filling types of array
//     //types[i] = typeof dannyArray[i];

//     //fill witth push
//     types.push(typeof dannyArray[i]);
// }

// console.log(types);

//////////////////////////////////////////////////////////////////////////
// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i])
}

for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i])
}

const calcAverage = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(tips, totals)
console.log(calcAverage(totals))
console.log(calcAverage(tips))
