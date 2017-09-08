/*

  @author: Andrew Oikonomidis

  developed during freeCodeCamp's Front End Development Certification

  -------------------------------------------------------------------

  Exact Change

  instructions:

  Design a cash register drawer function checkCashRegister() 
  that accepts purchase price as the first argument (price), 
  payment as the second argument (cash), 
  and cash-in-drawer (cid) as the third argument.

  cid is a 2D array listing available currency.

  Return the string "Insufficient Funds" 
  if cash-in-drawer is less than the change due. 
  Return the string "Closed" if cash-in-drawer 
  is equal to the change due.
  Otherwise, return change in coin and bills, 
  sorted in highest to lowest order.

*/

// Global Object
const money = [
  // ["ONE HUNDRED", 100.00]
  {
    name: 'One HUNDRED',
    value: 100.00
  },
  // ["TEN", 20.00]
  {
    name: 'TWENTY',
    value: 20.00
  },
  // ["TEN", 20.00]
  {
    name: 'TEN',
    value: 10.00
  },
  // ["FIVE", 55.00]
  {
    name: 'FIVE',
    value: 5.00
  },
  // ["ONE", 90.00]
  {
    name: 'ONE',
    value: 1.00
  },
  // ["QUARTER", 4.25]
  {
    name: 'QUARTER',
    value: 0.25
  },
  // ["DIME", 3.10]
  {
    name: 'DIME',
    value: 0.10
  },
  // ["NICKEL", 2.05]
  {
    name: 'NICKEL',
    value: 0.05
  },
  // ["PENNY", 1.01]
  {
    name: 'PENNY',
    value: 0.01
  }];

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  
  let till = cid.reduce((a, b) => {
    return a + b[1];
  }, 0.0).toFixed(2);
  
  if (till < change) {
    return "Insufficient Funds";
  } else if (till == change) {
    return "Closed";
  }
  
  cid = cid.reverse();
  
  let result = money.reduce((acc, next, index) => {
    if (change >= next.value) {
      
      let currentValue = 0.00;
      
      while (change >= next.value && cid[index][1] >= next.value) {
        currentValue += next.value;
        change -= next.value;
        change = Math.round(change * 100) / 100;
        cid[index][1] -= next.value; 
      }
      
      acc.push([next.name, currentValue]);
      return acc;
    } else {
      return acc;
    }
  }, []);  
  // Here is your change, ma'am.
  return (result.length > 0 && change === 0) ? result : "Insufficient Funds";
}

// some testing
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])); // should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return "Insufficient Funds".
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return "Closed".