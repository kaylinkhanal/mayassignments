// Q1. Capitalize the first letter of all values: { a: 'ram', b: 'sita' }
const obj1 = { a: 'ram', b: 'sita' };
const capitalized = Object.fromEntries(Object.entries(obj1).map(([k, v]) => [k, v[0].toUpperCase() + v.slice(1)]));
console.log(capitalized);

// Q2. Convert { name: 'Ram', age: 25 } to "name=Ram&age=25"
const obj2 = { name: 'Ram', age: 25 };
const queryString = Object.entries(obj2).map(([k, v]) => `${k}=${v}`).join('&');
console.log(queryString);

// Q3. Filter object to keep only keys with even-length names: { one: 1, four: 4, six: 6 }
const obj3 = { one: 1, four: 4, six: 6 };
const evenKeys = Object.fromEntries(Object.entries(obj3).filter(([k]) => k.length % 2 === 0));
console.log(evenKeys);

// Q4. Multiply all numeric values by 2: { a: 10, b: 'x', c: 5 }
const obj4 = { a: 10, b: 'x', c: 5 };
const doubled = Object.fromEntries(Object.entries(obj4).map(([k, v]) => [k, typeof v === 'number' ? v * 2 : v]));
console.log(doubled);

// Q5. Create a key-count object from an array: ['apple', 'banana', 'apple']
const arr5 = ['apple', 'banana', 'apple'];
const countObj = {};
arr5.forEach(fruit => {
  countObj[fruit] = (countObj[fruit] || 0) + 1;
});
console.log(countObj);

// Q6. Remove keys where values are falsy: { a: 0, b: 'hi', c: '', d: null }
const obj6 = { a: 0, b: 'hi', c: '', d: null };
const truthyOnly = Object.fromEntries(Object.entries(obj6).filter(([k, v]) => Boolean(v)));
console.log(truthyOnly);

// Q7. Make a copy of object with key names reversed: { ram: 1, sita: 2 } → { mar: 1, atis: 2 }
const obj7 = { ram: 1, sita: 2 };
const reversedKeys = Object.fromEntries(Object.entries(obj7).map(([k, v]) => [k.split('').reverse().join(''), v]));
console.log(reversedKeys);

// Q8. Count number of string values in object: { a: 'hi', b: 5, c: 'hello' }
const obj8 = { a: 'hi', b: 5, c: 'hello' };
const stringCount = Object.values(obj8).filter(v => typeof v === 'string').length;
console.log(stringCount);
