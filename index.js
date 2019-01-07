// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  }
   else {
    return true;

  }
}


function reverseString(myString) {
  function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    }
     else {
      return true;

    }
  }
 let reversed = myString.split("").reverse().join("");

console.log(reversed);
}
