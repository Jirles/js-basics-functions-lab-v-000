// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
};

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
};
