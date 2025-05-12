const arr = [
  "ram",
  { math: 10, english: 20 },
  ["bhaktapur", "sanepa"],
  { gender: "Male" },
];

// Step 1: Extract the score object
const scores = arr[1];

// Step 2: Convert object values to array and sum them
const total = Object.values(scores).reduce((acc, curr) => acc + curr, 0);

console.log(total);

// Quesno.2
const users = ["ram", "shyam", null, undefined, false, "gopal"];

const filteredUsers = users.filter(Boolean);

console.log(filteredUsers);

// Quesno.3
const touristSpots = [
  { name: "Bhaktapur", location: "Bhaktapur" },
  { name: "Patan", location: "Lalitpur" },
  { name: "Kathmandu", location: "Kathmandu" },
  { name: "Pokhara", location: "Kaski" },
];

const names = touristSpots.map((spot) => spot.name);

console.log(names);
