// Code your solution in this file!
const returnFirstTwoDrivers = (function (drivers) {
    return [drivers[0], drivers[1]];
});

const returnLastTwoDrivers = (function(drivers) { 
    return [drivers[drivers.length -2], drivers[drivers.length-1]];
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

function fareDoubler(fare) {
    const doubler = createFareMultiplier(2);
    return doubler(fare);
}

function fareTripler(fare) {
    const tripler = createFareMultiplier(3);
    return tripler(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}