// Q1. Count how many values are greater than 10 in { a: 5, b: 15, c: 25 }
const obj1 = { a: 5, b: 15, c: 25 };
const count = Object.values(obj1).filter(v => v > 10).length;
console.log(count);

// Q2. Remove the key 'temp' from { name: 'Sensor', temp: 50 }
const obj2 = { name: 'Sensor', temp: 50 };
delete obj2.temp;
console.log(obj2);

// Q3. Keep only properties where value is a string in { a: 1, b: 'hi', c: true }
const obj3 = { a: 1, b: 'hi', c: true };
const filtered = Object.fromEntries(Object.entries(obj3).filter(([k, v]) => typeof v === 'string'));
console.log(filtered);

// Q4. Create a new object with keys in uppercase from { a: 1, b: 2 }
const obj4 = { a: 1, b: 2 };
const upperKeys = Object.fromEntries(Object.entries(obj4).map(([k, v]) => [k.toUpperCase(), v]));
console.log(upperKeys);

// Q5. Get all entries where key starts with 'u' from { user1: 'Ram', name: 'Sita' }
const obj5 = { user1: 'Ram', name: 'Sita' };
const result5 = Object.fromEntries(Object.entries(obj5).filter(([k]) => k.startsWith('u')));
console.log(result5);

// Q6. Invert keys and values of { A: '1', B: '2' } → { '1': 'A', '2': 'B' }
const obj6 = { A: '1', B: '2' };
const inverted = Object.fromEntries(Object.entries(obj6).map(([k, v]) => [v, k]));
console.log(inverted);

// Q7. Merge two objects: { a: 1 } and { b: 2 }
const obj7a = { a: 1 };
const obj7b = { b: 2 };
const merged = { ...obj7a, ...obj7b };
console.log(merged);

// Q8. Check if all values in { x: true, y: true } are true
const obj8 = { x: true, y: true };
const allTrue = Object.values(obj8).every(v => v === true);
console.log(allTrue);
