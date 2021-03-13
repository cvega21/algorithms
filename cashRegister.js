const checkCashRegister = (price, cash, cid) => {
  let changeActual = cash - price;
  let changeTracker = 0;
  let i = 8;
  let currencyUnits = [0.01,0.05,0.10,0.25,1.00,5.00,10.00,20.00,100.00];
  let changeAnswer = [];
  let currentUnitArr = [];
  let currentUnitCounter = 0;
  let currentAvailableCounter = 0;
  let objectAnswer = {status: "", change: []};
  let cumulativeDrawer = 0;

  while (changeTracker != changeActual && i >= 0) {
    let currentNumber = currencyUnits[i];
    let currentAvailable = cid[i][1];
    let currentUnit = cid[i][0];
    let roundedTest = (Math.round(changeTracker*100) + Math.round(currentNumber*100)) / 100;
    currentAvailableCounter = Math.round(currentAvailableCounter * 100) / 100;

    if (currentNumber < changeActual && currentAvailableCounter + currentNumber <= currentAvailable && roundedTest <= changeActual) {
      currentAvailableCounter += currentNumber;
      changeTracker += currentNumber;
      currentUnitCounter++;
      changeTracker = Math.round(changeTracker * 100) / 100;
      currentUnitArr = [currentUnit,currentNumber*currentUnitCounter];
      if (changeTracker === changeActual) {
          changeAnswer.push(currentUnitArr);
          cumulativeDrawer += currentAvailable;
      };
    } else {
        if (currentUnitArr.length && cumulativeDrawer > changeActual) {
          changeAnswer.push(currentUnitArr);
          currentUnitArr = [];
        }
        cumulativeDrawer += currentAvailable;
        currentAvailableCounter = 0;
        currentUnitCounter = 0;
        i--;
    }
  }
  
  if (changeAnswer.length) {
    objectAnswer.change = (changeAnswer);
  }
  
  if (changeTracker < changeActual) {
    objectAnswer.status = "INSUFFICIENT_FUNDS";
    objectAnswer.change = ([]);
  } else if (cumulativeDrawer === changeActual) {
    objectAnswer.status = "CLOSED";
    objectAnswer.change = (cid);
  } else {
    objectAnswer.status = "OPEN";
  }

  return objectAnswer;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])