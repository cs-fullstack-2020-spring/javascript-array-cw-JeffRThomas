console.log("Your JS file loaded!!!");
console.log("*******************Exercise1*********************");
// ### Exercise 1
// *Start of Code*
// Creating the Array
let theBeatles = ["John", "Paul", "George", "Pete"];
// Print Pete's name only
console.log(theBeatles[3]);
// Remove Pete, and replace with Ringo, then print the list
theBeatles.pop();
theBeatles.push("Ringo");
console.log(theBeatles);
// Add Yoko's name to the list, then print the new list
theBeatles.push("Yoko");
console.log(theBeatles);
// *End of Code*
console.log("*******************Exercise2*********************");
// ### Exercise 2
// Variable Declaration of Four Seperate User Inputs
let userAge1 = prompt("If I asked you to pick the ages of your four favorite years (4) of life, which age would you say first?");
let userAge2 = prompt("Which age would you say next?");
let userAge3 = prompt("And after that?");
let userAge4 = prompt("And lastly you would say?");
// Array Creation and Output Display in Console Log
let favYearsOfLife = [userAge1,userAge2,userAge3,userAge4];
console.log(favYearsOfLife);
let deletedAge = favYearsOfLife.splice(userAge3,1);prompt(`You entered ${userAge3} for your third age, sorry we need to delete that you.`);

console.log(favYearsOfLife);

console.log("*******************Exercise3*********************");
// ### Exercise 3