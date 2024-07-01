// Code your solution in this file!

function distanceFromHqInBlocks(pickuplocation) {
    const headQuarters = 42; // Scubers Headquarters is located in 42nd Street
    let distance;
    if (pickuplocation >= 42) {
        distance = pickuplocation - headQuarters
    } else { 
        distance = headQuarters - pickuplocation
    }
    
    return distance; // Returns distance in blocks
}   

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    let blocksTravelled;
    if (start >= destination) { // 
      blocksTravelled = start - destination;
    } else {
      blocksTravelled = destination - start;
    }
    return blocksTravelled * 264;
  }

  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
  
    if (feetTravelled <= 400) {
      return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
      return 25;
    } else if (feetTravelled > 2500) {
      return 'cannot travel that far';
    }
  }