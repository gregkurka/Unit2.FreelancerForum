//element to update for the table
const freelancerTable = document.querySelector(".freelance-table-body");
//global variables for average price calculation
const avgPriceElement = document.querySelector(".avg-price");
let totalPrice = 0;
let priceNumber = 0;

const initialFreelancerArray = [
  { name: "Mr. Cheese", occupation: "Cheesemaker", price: 37 },
  {
    name: "Admiral Procksteiner",
    occupation: "Watch Tech",
    price: 93,
  },
  {
    name: "Teddy McTedderson",
    occupation: "Teddy Bear Mechanic",
    price: 24,
  },
];

function addToFreelancerList(name, occupation, price) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name}</td><td>${occupation}</td><td>$${price}.00 /hr</td>`;
  freelancerTable.appendChild(newRow);
  //update the price average and display it
  totalPrice += price;
  priceNumber += 1;
  avgPriceElement.innerHTML = `$${Math.floor(totalPrice / priceNumber)}.00`;
}

//Initialize the list
initialFreelancerArray.forEach((item) =>
  addToFreelancerList(item.name, item.occupation, item.price)
);

const randomFirstNames = [
  "Ted",
  "Mark",
  "Winston",
  "Professor",
  "Bullwinkle",
  "The Incredible",
  "Darth",
  "Han",
  "Harry",
  "Minerva",
  "Malfoy",
  "Wigglesbee",
  "Admiral",
  "Doctor",
];
const randomLastNames = [
  "Potter",
  "Snape",
  "Skywalker",
  "Adams",
  "Johson",
  "Snuggles",
  "Alan",
  "Peterson",
  "Brocktenshteiner",
  "Hulk",
  "Vader",
  "Solo",
  "McGonagall",
  "Whiskers",
  "Fluffy",
];
const randomOccupations = [
  "Fish Catcher",
  "Cook",
  "Political Lackey",
  "Piano Teacher",
  "Math Tutor",
  "Science Tutor",
  "Dog Walker",
  "Programmer",
  "Driver",
  "HVAC Checker",
];

function generateNewFreelancer() {
  const newFreelancer = {
    name: `${
      randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)]
    } ${randomLastNames[Math.floor(Math.random() * randomLastNames.length)]}`,
    occupation: `${
      randomOccupations[Math.floor(Math.random() * randomOccupations.length)]
    }`,
    price: Math.floor(Math.random() * 100),
  };
  addToFreelancerList(
    newFreelancer.name,
    newFreelancer.occupation,
    newFreelancer.price
  );
}

setInterval(generateNewFreelancer, 3000);
