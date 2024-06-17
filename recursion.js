/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
  //Base case
  if(idx === nums.length) return 1;

  //Normal case
  return nums[idx]   * product(nums, idx +1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0) {
  //Base case
  if(idx === words.length) return 0;

  //Normal case
  if(words[idx].length > longest(words, idx+1)){
    return words[idx].length
  }else{
    
    return longest(words, idx+1);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0) {
    //Base case
    if(idx >= str.length) return "";


    //Normal case
    return str[idx] + everyOther(str, idx+2);
    
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  //Base case
  if(idx >= str.length/2) return true;


  //Normal case
  return str[idx].toLowerCase() === str[str.length-1-idx].toLowerCase() && isPalindrome(str, idx+1);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  //Base Case
  if(idx === arr.length) return -1;

  //Normal Case
  if(arr[idx].toLowerCase() === val.toLowerCase()){
    return idx
  }else{ 
    return findIndex(arr, val, idx+1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=str.length-1) {
  //Base case
  if(idx < 0) return "";

  //Normal case
  return str[idx]+ revString(str, idx-1);
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj, strArr = []) {
  let valuesArr = Object.values(obj);
  
  for (let val of valuesArr) {
    if (typeof val === "string") {
      strArr.push(val);
    } else if (val !== null && typeof val === "object") {
      gatherStrings(val, strArr);
    }
  }
  
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */


function binarySearch(arr, val, start = 0) {
  // Base case: empty array
  if (arr.length === 0) return -1;

  // Normal case
  const midIndex = Math.floor(arr.length / 2);

  if (arr[midIndex] === val) {
    return start + midIndex; // Return the actual index in the original array
  } else if (arr[midIndex] > val) {
    return binarySearch(arr.slice(0, midIndex), val, start); // Search in the left half
  } else {
    return binarySearch(arr.slice(midIndex + 1), val, start + midIndex + 1); // Search in the right half
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
