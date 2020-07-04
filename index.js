// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(- 2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return fareMultiplier;
}

function fareMultiplier(num){
    return num * num;
}

function fareDoubler(num){
    return num*2;
}

function fareTripler(num){
    return num*3;
}

function selectDifferentDrivers(arrayOfDrivers, reqFunction){
    return reqFunction(arrayOfDrivers);
}
