const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    utils.trimProperties(input);
    const expected = { foo: "  foo ", bar: "bar ", baz: " baz" };
    expect(input).toEqual(expected);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { car: " Nissan ", driver: "Mike  ", age: 34 };
    const expected = { car: "Nissan", driver: "Mike", age: 34 };
    const output = utils.trimPropertiesMutation(input);
    expect(output).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { car: " Nissan ", driver: "Mike  ", age: 34 };
    const output = utils.trimPropertiesMutation(input);
    expect(output).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const input = [
      { integer: 2 },
      { integer: 12 },
      { integer: 6 },
      { integer: 7 },
    ];
    const output = utils.findLargestInteger(input);
    const expected = 12;
    expect(output).toBe(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const output = counter.countDown();
    expect(output).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    const output = counter.countDown();
    expect(output).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const output = counter.countDown();
    expect(output).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const output = seasons.next();
    expect(output).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const output = seasons.next();
    expect(output).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    const output = seasons.next();
    expect(output).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    const output = seasons.next();
    expect(output).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    const output = seasons.next();
    expect(output).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let output;
    for (let i = 0; i < 40; i++) {
      output = seasons.next();
    }
    expect(output).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    const output = focus.drive(20);
    expect(output).toEqual(20);
  });
  test("[16] driving the car uses gas", () => {
    focus.drive(20);
    expect(focus.tank).toBeLessThan(20);
  });
  test("[17] refueling allows to keep driving", () => {
    focus.drive(300);
    const startingTank = focus.tank;
    focus.refuel(10);
    const finalTank = focus.tank;
    expect(finalTank).toBeGreaterThan(startingTank);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    focus.refuel(10);
    expect(focus.tank).toEqual(20);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const number = await utils.isEvenNumberAsync(7);
    expect(number).toBe(true);
  });
  test("[20] resolves false if passed an odd number", async () => {
    const number = await utils.isEvenNumberAsync(10);
    expect(number).toBe(false);
  });
});
