const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return int ** 4;
}

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
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