function trimProperties(obj) {
  const copyObj = { ...obj };
  for (let key in copyObj) {
    copyObj[key] = copyObj[key].trim();
  }
  return copyObj;
}

function trimPropertiesMutation(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].trim();
    }
  }
  return obj;
}

function findLargestInteger(integers) {
  const numbers = integers.map((cur) => {
    return cur.integer;
  });
  return Math.max(...numbers);
}

class Counter {
  constructor(initialNumber) {
    this.count = initialNumber;
  }
  countDown() {
    if (this.count !== 0) {
      this.count -= 1;
      return this.count + 1;
    } else {
      return 0;
    }
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.count = 2;
    this.seasons = ["fall", "winter", "spring", "summer"];
    // ✨ initialize whatever properties are needed
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    if (this.seasons[this.count] == "summer") {
      this.count = 0;
    } else {
      this.count += 1;
    }
    return this.seasons[this.count];
    // ✨ implement
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0; // car initilizes with zero miles
    this.tank = tankSize; // car initiazes full of gas
    this.name = name;
    this.mpg = mpg;
    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    if (this.tank > 0) {
      this.odometer += distance;
      this.tank = this.tank - (this.mpg / distance) ** -1;
      return this.odometer;
    }
    // ✨ implement
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    if (this.tank < 20) {
      if (this.tank + gallons < 20) {
        this.tank += gallons;
      } else {
        this.tank = 20;
      }
    } else {
      this.tank = 20;
    }
    return this.odometer;
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync(number) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (number % 2) {
        res(true);
      } else {
        res(false);
      }
    }, 500);
  });
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
};
