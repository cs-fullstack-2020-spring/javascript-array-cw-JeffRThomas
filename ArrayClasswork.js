console.log("Your JS file loaded!!!");
console.log("*******************Exercise1*********************");
// ### Exercise 1
// *Start of Code*
// Creating the Array
let theBeatles = ["John", "Paul", "George", "Pete"];
// Print Pete's name only
console.log(theBeatles[3]);
// Remove Pete, and replace with Ringo, then print the list
// !! : this only works bc Pete is at the end, you can also replace values in an array
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
// Delete Third Element
let deletedIndex=favYearsOfLife.indexOf(userAge3);
favYearsOfLife.splice(deletedIndex,1);
// Changing the Second Element
favYearsOfLife.unshift('38'); // !! : unshift adds an element to the beginning of your array
console.log(favYearsOfLife);

console.log("*******************Exercise3*********************");
// ### Exercise 3