// Q1. Group values by first letter: { a: 'Apple', b: 'Banana', c: 'Avocado' }
const data1 = { a: 'Apple', b: 'Banana', c: 'Avocado' };
const grouped = {};
Object.values(data1).forEach(val => {
  const first = val[0];
  if (!grouped[first]) grouped[first] = [];
  grouped[first].push(val);
});
console.log(grouped);

// Q2. Flatten: { a: { x: 1 }, b: 2 } → { 'a.x': 1, b: 2 }
const nested = { a: { x: 1 }, b: 2 };
const flattened = {};
for (let [key, val] of Object.entries(nested)) {
  if (typeof val === 'object' && !Array.isArray(val)) {
    for (let [k2, v2] of Object.entries(val)) {
      flattened[`${key}.${k2}`] = v2;
    }
  } else {
    flattened[key] = val;
  }
}
console.log(flattened);

// Q3. Sum all numeric values in { a: 10, b: '5', c: 15 }
const obj3 = { a: 10, b: '5', c: 15 };
const sum = Object.values(obj3).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
console.log(sum);

// Q4. Convert values to booleans: { a: 1, b: 0, c: '' } → { a: true, b: false, c: false }
const raw = { a: 1, b: 0, c: '' };
const boolObj = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, Boolean(v)]));
console.log(boolObj);

// Q5. Remove all keys with empty string: { a: '', b: 'hello', c: '' }
const obj5 = { a: '', b: 'hello', c: '' };
const noEmpty = Object.fromEntries(Object.entries(obj5).filter(([k, v]) => v !== ''));
console.log(noEmpty);

// Q6. Convert all keys to lowercase: { NAME: 'RAM', AGE: 25 }
const obj6 = { NAME: 'RAM', AGE: 25 };
const lowerKeys = Object.fromEntries(Object.entries(obj6).map(([k, v]) => [k.toLowerCase(), v]));
console.log(lowerKeys);

// Q7. Keep only numeric values: { a: 1, b: 'hi', c: 2 }
const obj7 = { a: 1, b: 'hi', c: 2 };
const onlyNumbers = Object.fromEntries(Object.entries(obj7).filter(([k, v]) => typeof v === 'number'));
console.log(onlyNumbers);

// Q8. Count how many keys have length > 3: { one: 1, four: 4, five: 5 }
const obj8 = { one: 1, four: 4, five: 5 };
const countKeys = Object.keys(obj8).filter(key => key.length > 3)
console.log(countKeys);

//milenaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
