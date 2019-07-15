// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
  // extracts 0,1 (but not the last # of the index)
};


const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(argInteger){return function(argInteger){
  return argInteger * 5
};
}

const fareDoubler = function
createFareMultiplier(fare) {
  return fare * 2};

const fareTripler = function createFareMultiplier(fare) {
  return fare * 3
};

function selectDifferentDrivers(drivers,otherFunction){
  return otherFunction(drivers)

}
