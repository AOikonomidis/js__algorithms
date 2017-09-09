/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Inventory Update

  instructions:

  Compare and update the inventory stored in a 2D array 
  against a second 2D array of a fresh delivery. 
  Update the current existing inventory item quantities (in arr1). 
  If an item cannot be found, add the new item 
  and quantity into the inventory array. 
  The returned inventory array should be in alphabetical order by item.

*/

function updateInventory(arr1, arr2) {
    for (let value of arr2) {
      let inventoryExist = arr1.every(element => {
        return element[1] !== value[1];
      });
      
      if (inventoryExist) { // if inventory doesn't exist add it
        arr1.push(value);
      } else { // else add its stock 
        let index = arr1.findIndex(element => {
          return element[1] === value[1];
        });
        arr1[index][0] += value[0];
      }
    }
  
    arr1 = arr1.sort((a, b) => {
      return a[1]<b[1] ? -1 : 1;
    });
  
    return arr1;
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// some testing
console.log(updateInventory(curInv, newInv)); // should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
