// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
};

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
};
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
};

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination);
  let price;
  if (distance <= 400) {
    price = 0;
  } else if (distance > 400 && distance <= 2000) {
    price = distance * 0.02;
  }
};
