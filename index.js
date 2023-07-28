function distanceFromHqInBlocks(location) {
    if (location > 42) {
      return location - 42;
    } else {
      return 42 - location;
    }
  }
  console.log(distanceFromHqInBlocks(50)); // Output: 8

  function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
  }
  console.log(distanceFromHqInFeet(50)); // Output: 2112

  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start) * 264;
    return distance;
  }
    console.log(distanceTravelledInFeet(34, 38)); // Output: 1056

    function calculatesFarePrice(start, destination) {
      const distanceTravelled = distanceTravelledInFeet(start, destination); //changed from distanceFromHqInFeet() to distanceTravelledInFeet()
      if (distanceTravelled < 400) {
        return 0;
      } else if (distanceTravelled >= 400 && distanceTravelled < 2000) {
        return distanceTravelled * .02;
      }
      else if ((distanceTravelled >= 2000) && (distanceTravelled <= 2500)) {
        return 25;
      }
      else {
        return 'cannot travel that far';
      }
    }
   