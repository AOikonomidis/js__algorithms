/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Make a Person

  instructions:

  Fill in the object constructor with the following methods below:

  getFirstName()
  getLastName()
  getFullName()
  setFirstName(first)
  setLastName(last)
  setFullName(firstAndLast)

*/

var Person = function(firstAndLast) {
  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };
  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  };
  this.getFullName = function() {
    return firstAndLast;
  };
  
  this.setFirstName = function(first) {
    firstAndLast = first + ' ' + firstAndLast.split(' ')[1];
  };
  this.setLastName = function(last) {
    firstAndLast = firstAndLast.split(' ')[0] + ' ' + last;
  };
  this.setFullName = function(name) {
    firstAndLast = name;
  };
    
};

var bob = new Person('Bob Ross');
// some testing
console.log(bob.getFullName()); // should return "Bob Ross".
bob.setFirstName("Haskell");
console.log(bob.getFullName()); // should return "Haskell Ross".
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName()); // should return "Haskell".
console.log(bob.getFullName()); // should return "Haskell Curry".
