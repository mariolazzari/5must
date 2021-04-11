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
