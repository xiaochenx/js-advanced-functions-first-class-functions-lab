// Code your solution in this file!

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(2,4);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fair){
    return function quad(fair){
        return fair * 5;
    }
}

const fareDoubler = createFareMultiplier => createFareMultiplier * 2;

const fareTripler = createFareMultiplier => createFareMultiplier * 3;

function selectDifferentDrivers(arrayOfDrivers,functions){
   return functions(arrayOfDrivers);
    }
    