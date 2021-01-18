const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
  return array.slice(array.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function(fare) {
    return fare * int;
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arr, fn) {
  return fn(arr);
}
