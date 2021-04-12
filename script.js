function calculatePrice(price, taxes, description) {
  // nullish coalescing: ??
  taxes = taxes ?? 0.05;
  description = description ?? "Default item";

  const total = price * (1 + taxes);
  // styling console
  console.log(
    `%c${description} with tax: %c$${total}`,
    "font-weight:bold",
    "color:green"
  );
}

calculatePrice(100, 7, "My item 1");
calculatePrice(100, 0, "My item 2");
calculatePrice(100, undefined, undefined);

//
class Person {
  constructor(name, address, hobbies) {
    this.name = name;
    this.address = address;
    this.hobbies = hobbies;
  }

  print() {
    console.log(this);
  }
}

function printPersonStreet(person) {
  // optional chaining
  console.log(person?.address?.street);
}

const kyle = new Person("Kyle", { street: "street one", city: "New York" }, [
  "hobby one",
  "hobby two",
]);
kyle.print();
printPersonStreet(kyle);

// some missing
const miss = new Person("Missing", undefined); // missing array....
miss.print();
printPersonStreet(miss);

// optional period
kyle.print?.();
kyle.printName?.();
let firstHobby = kyle.hobbies?.[0];
console.log("kyle 1st:", firstHobby);
firstHobby = miss.hobbies?.[0];
console.log("miss 1st", firstHobby);

// script defer attribute
const button = document.querySelector("button");
button.style.backgroundColor = "green";

// scope
const a = 1;

function main() {
  const a = 2;
  console.log(`In main: ${a}`);
}

{
  const a = 3;
  console.log(`In brackets: ${a}`);
}

main();
console.log(`In global: ${a}`);

// scope in switch
switch (a) {
  case 1:
    {
      const result = a * 2;
      console.log(result);
    }
    break;

  case 2:
    {
      const result = a + 2;
      console.log(result);
    }
    break;

  case 3:
    {
      const result = a - 2;
      console.log(result);
    }
    break;
}

// in keyword
const person = {
  name: "Kyle",
  age: 22,
};

if (person.name) {
  console.log("person has name");
}

// don't care about value (undefined, '')
if ("name" in person) {
  console.log("person has name");
}

// tagged template litterals: https://blog.webdevsimplified.com/2020-03/tagged-template-literals/
function custom(strings, ...values) {
  console.log(strings, values);
  return "hi";
}

const firstName = "Mario";
const hobby = "coding";
console.log(custom`My name is ${firstName} and I love ${hobby}.`);

// generators: https://blog.webdevsimplified.com/2021-01/javascript-generators/
function* generatorFunction() {
  console.log("before 1");
  yield 1;
  console.log("after 1");
  console.log("before 2");
  yield 2;
  console.log("after 2");
  console.log("before 3");
  yield 3;
  console.log("after 3");
}

const generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* idGenerator() {
  let id = 1;

  while (true) {
    yield id;
    id++;
  }
}

const genId = idGenerator();

const person1 = {
  id: genId.next().value,
  name: "Person One",
};

const person2 = {
  id: genId.next().value,
  name: "Person Two",
};

const person3 = {
  id: genId.next().value,
  name: "Person Three",
};

console.log("Generators:", person1);
console.log("Generators:", person2);
console.log("Generators:", person3);

// dynamic imports: https://www.youtube.com/watch?v=cRHQNNcYf6s

// labels
loop1: for (let i = 0; i < 4; i++) {
  loop2: for (let j = 0; j < 3; j++) {
    console.log("before continue");
    if (i === 1) {
      continue loop1; // skip immediatly to loop1 label
    }

    console.log(
      `%ci=%c${i}, %cj=%c${j}`,
      "color:#555",
      "font-weight:bold",
      "color:#555",
      "font-weight:bold"
    );

    // break loop2
    if (i === 2) {
      break loop2;
    }
  }
}

// labels and scope
name: {
  console.log("before");
  break name;
  console.log("after");
}

console.log("after scope");

// obj freeze
const mario = Object.freeze({
  name: "Mario",
  age: 46,
  favoriteFood: "Pizza",
  address: {
    street: "Via Roma 1",
  },
  hobbies: Object.freeze(["reading"]),
});

console.log(mario);
mario.name = "Mario Lazzari"; // ignored by freeze
mario.address = { street: "Via Milano 1" };
// mario.hobbies.push("coding"); // error by freeze
console.log(mario);

// Maps
/*
const CURRENCY_MAP = {
  "United Stated": "USD",
  India: "Rupee",
};

const currency = CURRENCY_MAP["United Stated"];
console.log(currency);
*/

const CURRENCY_MAP = new Map([
  // ["United Stated", "USD"],
  // [India, "Rupee"],
]);
CURRENCY_MAP.set("United Stated", "USD");
CURRENCY_MAP.set("India", "Rupee");
console.log(CURRENCY_MAP.get("India"));

// Sets
const uniqueNums = [1, 2, 2, 3, 4, 5, 6, 6, 6];
const set = new Set(uniqueNums);
console.log(set);

if (set.has(1)) {
  set.delete(1);
}
console.log(set);

// binary math
console.log(0.1 + 0.2);

// debug tips
console.time("Timer");
for (let i = 0; i < 100000000; i++) {
  // really slow fx...
}
console.timeEnd("Timer");

// error
const err = 1;
if (err === 1) {
  console.error("error", err);
}

// warning
const warn = 1;
if (warn === 1) {
  console.warn("warning", warn);
}

// assertion
const assert = 1;
console.assert(assert === 2, `${assert} is not 1`);

const people = [
  { name: "Mario", age: 46 },
  { name: "Mariarosa", age: 45 },
];
//debugger;
console.table(people);
