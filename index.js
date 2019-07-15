// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare){
        return fare * num;
    };
    
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}


function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}

