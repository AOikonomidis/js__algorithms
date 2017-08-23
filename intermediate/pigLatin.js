/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Pig Latin

  instructions:

  Translate the provided string to pig latin.
  Pig Latin takes the first consonant (or consonant cluster) 
  of an English word, moves it to the end of the word and suffixes an "ay".
  If a word begins with a vowel you just add "way" to the end.
  Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {
  var strSplit = str.split(""),
      vowels = ['a', 'e', 'i', 'o', 'u'],
      flag1 = false,
      flag2 = false,
      i = 0;
  
  while(i<vowels.length) {
    if (str.startsWith(vowels[i])) {
      str = str.concat("way");
      flag1 = true;
      return str;
    }
    
    if (strSplit[1] === vowels[i]) {
      flag2 = true;
      break;
    }
      
    i++;
  }
  
  if (!flag1) {
    strSplit.push(strSplit[0]);
    strSplit.shift();
  }
  
  if (!flag2) {
    strSplit.push(strSplit[0]);
    strSplit.shift();
  }
  
  str = strSplit.join("").concat("ay");
  return str;
}

// some testing
console.log(translatePigLatin("california")); // should return "aliforniacay".
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
console.log(translatePigLatin("glove")); // should return "oveglay".
console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("eight")); // should return "eightway".