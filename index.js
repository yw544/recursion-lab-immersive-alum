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

function isPalindrome(str){
  if(str.length < 2){
    return true //base case
  } else {
    if(str[0]===str[str.length-1]){
      return isPalindrome(str.substring(1, str.length-1))
    }else{
      return false
    }
  }
}
