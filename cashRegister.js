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
  console.log(changeActual);

  while (changeTracker != changeActual && i >= 0) {
    let currentNumber = currencyUnits[i];
    let currentAvailable = cid[i][1];
    let currentUnit = cid[i][0];
    let roundedTest = (Math.round(changeTracker*100) + Math.round(currentNumber*100)) / 100;
    currentAvailableCounter = Math.round(currentAvailableCounter * 100) / 100;

    console.log(`current unit: ${currentUnit} (${currentNumber}), available: ${currentAvailable - currentAvailableCounter}`);
    console.log(`current number: (${currencyUnits[i]})`);
    console.log(`condition 1: ${currentNumber < changeActual}, condition 2: ${currentAvailableCounter + currentNumber <= currentAvailable}, condition 3: ${changeTracker + currentNumber <= changeActual}`);
    console.log(`changeTracker: ${changeTracker}, currentNumber: ${currentNumber}, changeActual: ${changeActual}`);
    console.log(`changeTracker +  currentNumber = ${(Math.round(changeTracker*100) + Math.round(currentNumber*100)) / 100}`);
    console.log(`currentAvailableCounter = ${currentAvailableCounter}`);
    console.log(`currentNumber = ${currentNumber}`);
    console.log(`currentAvailable = ${currentAvailable}`);
    console.log(`changeTracker +  currentNumber = ${(Math.round(changeTracker*100) + Math.round(currentNumber*100)) / 100}`);
    console.log(`changeTracker +  currentNumber = ${(Math.round(changeTracker*100) + Math.round(currentNumber*100)) / 100}`);
    if (currentNumber < changeActual && currentAvailableCounter + currentNumber <= currentAvailable && roundedTest <= changeActual) {
      currentAvailableCounter += currentNumber;
      changeTracker += currentNumber;
      currentUnitCounter++;
      console.log('HEYEYEYEYEYYE');
      changeTracker = Math.round(changeTracker * 100) / 100;
      console.log(`change Tracker = ${changeTracker}`);
      currentUnitArr = [currentUnit,currentNumber*currentUnitCounter];
      if (changeTracker === changeActual) {
          changeAnswer.push(currentUnitArr);
          cumulativeDrawer += currentAvailable;
      };
      console.log(`CURRENT UNIT ARR = ${currentUnitArr}`)
      console.log(currentUnitArr);
    } else {
        if (currentUnitArr.length && cumulativeDrawer > changeActual) {
          changeAnswer.push(currentUnitArr);
          currentUnitArr = [];
        }
        cumulativeDrawer += currentAvailable;
        console.log('i --');
        console.log(`CURRENT UNIT ARR = ${currentUnitArr}`);
        console.log(`cumulativeDrawer = ${cumulativeDrawer}`);
        console.log(changeAnswer);
        currentAvailableCounter = 0;
        currentUnitCounter = 0;
        i--;
    }

    console.log(cumulativeDrawer);
    console.log();
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


  console.log(`changeAnswer = ${changeAnswer}`);
  console.log(`objectAnswer = ${objectAnswer}`);
  console.log(objectAnswer);
  console.log(`changeTracker = ${changeTracker}`);
  console.log(`cumulative drawer = ${cumulativeDrawer}`);
  return objectAnswer;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])