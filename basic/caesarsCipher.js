/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Caesars Cipher

  instructions:

  One of the simplest and most widely known ciphers is a Caesar cipher, 
  also known as a shift cipher. In a shift cipher 
  the meanings of the letters are shifted by some set amount.

  A common modern use is the ROT13 cipher, 
  where the values of the letters are shifted by 13 places. 
  Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

  Write a function which takes a ROT13 encoded string 
  as input and returns a decoded string.
  All letters will be uppercase. Do not transform any 
  non-alphabetic character (i.e. spaces, punctuation), 
  but do pass them on.



*/

function rot13(str) { // LBH QVQ VG!
  str = str.toUpperCase();
  var arr = [];
  var finalArr = [];
  var code;
  for(var i=0; i<str.length; i++) {
    arr.push(str.charCodeAt(i));
  }
  
  for(var j=0; j<arr.length; j++) {
    code = arr[j];
    if(arr[j]>=65 && arr[j]<=90) {
      code = (arr[j]-65+13)%26+65;
    }
    finalArr.push(String.fromCharCode(code));
  }
  
  finalArr = finalArr.join('');
  return finalArr;
}

// some testing
console.log(rot13("SERR PBQR PNZC")); // should decode to "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // should decode to "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // should decode to "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."