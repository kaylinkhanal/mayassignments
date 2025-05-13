// 1. Use map to extract "name" from [{name: 'Ram'}, {name: 'Sita'}, {name: 'Hari'}]
const people = [{name: 'Ram'}, {name: 'Sita'}, {name: 'Hari'}];
const names = people.map(person => person.name);
console.log(names);

// 2. Use filter to keep only users age > 18 from an array of objects
const users = [
  {name: 'Ram', age: 17},
  {name: 'Sita', age: 20},
  {name: 'Hari', age: 22}
];
const adults = users.filter(user => user.age > 18);
console.log(adults);

// 3. Use forEach to log "Hello [name]" for each user object
users.forEach(user => {
  console.log(`Hello ${user.name}`);
});

// 4. Use map to change each object’s name to uppercase
const uppercasedUsers = users.map(user => ({
  ...user,
  name: user.name.toUpperCase()
}));
console.log(uppercasedUsers);

// 5. Use filter to exclude names starting with 'A' from ['Anil', 'Bobby', 'Asha', 'Hari']
const rawNames = ['Anil', 'Bobby', 'Asha', 'Hari'];
const filteredNames = rawNames.filter(name => !name.startsWith('A'));
console.log(filteredNames);

// 6. Use map to convert an array of prices to "$price" format
const prices = [100, 250, 80];
const formattedPrices = prices.map(price => `$${price}`);
console.log(formattedPrices);

// 7. Use forEach to count how many names contain the letter 'i'
let countWithI = 0;
rawNames.forEach(name => {
  if (name.includes('i')) {
    countWithI++;
  }
});
console.log(countWithI);

// 8. Use map to build an array of full names from objects with first and last names
const peopleFull = [
  {first: 'Ram', last: 'Sharma'},
  {first: 'Sita', last: 'Devi'}
];
const fullNames = peopleFull.map(p => `${p.first} ${p.last}`);
console.log(fullNames);
