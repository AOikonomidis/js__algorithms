/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Validate US Telephone Numbers

  instructions:

  Return true if the passed string is a valid US phone number.
  The user may fill out the form field any way they choose 
  as long as it is a valid US number. 

*/

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}[\s\-]?$/;
  return regex.test(str);
}

// some testing
console.log(telephoneCheck("555-555-5555")); // should return true.
console.log(telephoneCheck("1 555-555-5555")); // should return true.
console.log(telephoneCheck("1 (555) 555-5555")); // should return true.
console.log(telephoneCheck("555-5555")); // should return false.
console.log(telephoneCheck("123**&!!asdf#")); // should return false.
console.log(telephoneCheck("-1 (757) 622-7382")); // should return false.