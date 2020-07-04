const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const  createFareMultiplier = function(num){
    return function(val){
        return num * val;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const  selectDifferentDrivers =  function(drivers, whichDrivers){
    return whichDrivers(drivers);
};