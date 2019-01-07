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


function reverseString(myString){

  if(myString.length === 1) {
    return myString;
  }
  else {
    return reverseString(myString.substring(1)).concat(myString[0]);
  }
}
 function isPalindrome(string){

   if (string.length === 1) {
     return true; 
   }
   else {
     if(string[0]===string[string.length-1])
     return isPalindrome(string.substring(1, string.length-1));
   }
   else {
     return false;
   }
   }
 }