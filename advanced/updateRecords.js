/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Record Collection

  instructions:

  You are given a JSON object representing a part of your musical album collection. 
  Each album has several properties and a unique id number as its key. 
  Not all albums have complete information.

  Write a function which takes an album's id (like 2548), 
  a property prop (like "artist" or "tracks"), 
  and a value (like "Addicted to Love") 
  to modify the data in this collection.
  If prop isn't "tracks" and value isn't empty (""), 
  update or set the value for that record album's property.

*/

// Setup
let collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};


function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    }
    else {
      collection[id][prop] = [value];
    }
  }
  else if (value !== "") {
    collection[id][prop] = value;
  }
  else {
    delete collection[id][prop];
  }
  
  return collection;
}

// some testing
console.log(updateRecords(5439, "artist", "ABBA")); // artist should be "ABBA".
console.log(updateRecords(5439, "tracks", "Take a Chance on Me")); // tracks should have "Take a Chance on Me" as the last element.
console.log(updateRecords(2548, "artist", "")); // artist should not be set.