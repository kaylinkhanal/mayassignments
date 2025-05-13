// Q1. Get all values from this object: { a: 1, b: 2, c: 3 }
const obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj1));

// Q2. Get all keys from this object: { name: 'Ram', age: 25 }
const obj2 = { name: 'Ram', age: 25 };
console.log(Object.keys(obj2));

// Q3. Convert { brand: 'Nike', type: 'Shoes' } to an array of entries
const obj3 = { brand: 'Nike', type: 'Shoes' };
console.log(Object.entries(obj3));

// Q4. Find the number of properties in { x: 1, y: 2, z: 3 }
const obj4 = { x: 1, y: 2, z: 3 };
console.log(Object.keys(obj4).length);

// Q5. Check if 'price' exists in { name: 'Apple', color: 'Red' }
const obj5 = { name: 'Apple', color: 'Red' };
console.log(obj5.hasOwnProperty('price'));

// Q6. Print all keys of { user1: 'A', user2: 'B' } joined with '-'
const obj6 = { user1: 'A', user2: 'B' };
console.log(Object.keys(obj6).join('-'));

// Q7. Use a loop to print all key-value pairs in { a: 10, b: 20 }
const obj7 = { a: 10, b: 20 };
for (let key in obj7) {
  console.log(key + ': ' + obj7[key]);
}

// Q8. Convert this array [['id', 1], ['name', 'Book']] into an object
const entries = [['id', 1], ['name', 'Book']];
console.log(Object.fromEntries(entries));
