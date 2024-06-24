const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuseday":
    console.log("Prepare videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
    break;
  case "sunday":
    console.log("Enjoy the weeknd :D");
    break;

  default:
    console.log("not valid day!");
}

const day = "sunda";

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tusday") {
  console.log("Prepare videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weeknd :D");
} else {
  console.log("not a valid day!");
}

const age = 15;

age >= 18
  ? console.log("Du får dricka alkohol") //Ternary operator.
  : console.log("Du får inte dricka alkohol.");
// //Vi använder en expression för att få ut ett värde och få ut det som en
// ///statement.

const drink = age >= 18 ? "Sprit" : "Vatten";
console.log(drink);

const age = 20;
const drink = age >= 18 ? "Sprit" : "Vatten";

console.log(`I like to drink ${age >= 18 ? "Sprit" : "Vatten"}`);

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);
