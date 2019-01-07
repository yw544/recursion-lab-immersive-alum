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

function addUpTo(arr, idx){
  if(idx){
    return arr[idx] + addUpTo(arr, --idx)
  } else {
    return arr[idx] 
  }
}

function maxOf(arr){
  if(arr.length === 1){
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr)) 
  }
}

function includesNumber(arr, num){
  if(!arr.length){
    return false
  } else {
    if(arr[0] === num){
      return true
    } else {
      return includesNumber(arr.slice(1), num)
    }
  }
}