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
  constructor() {
    this.count = 2;
    this.seasons = ["fall", "winter", "spring", "summer"];
  }

  next() {
    if (this.seasons[this.count] == "summer") {
      this.count = 0;
    } else {
      this.count += 1;
    }
    return this.seasons[this.count];
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.odometer = 0;
    this.tank = tankSize;
    this.name = name;
    this.mpg = mpg;
  }

  drive(distance) {
    if (this.tank > 0) {
      this.odometer += distance;
      this.tank = this.tank - (this.mpg / distance) ** -1;
      return this.odometer;
    }
  }

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
