// Q1. Extract all usernames from: { user1: {name:'Ram'}, user2: {name:'Sita'} }
const users1 = { user1: {name:'Ram'}, user2: {name:'Sita'} };
const usernames = Object.values(users1).map(user => user.name);
console.log(usernames);

// Q2. Count how many users are active: { u1: true, u2: false, u3: true }
const status = { u1: true, u2: false, u3: true };
const activeCount = Object.values(status).filter(v => v === true).length;
console.log(activeCount);

// Q3. Convert object {name:'Book', price:100} into ['name: Book', 'price: 100']
const item = { name: 'Book', price: 100 };
const strArray = Object.entries(item).map(([k, v]) => `${k}: ${v}`);
console.log(strArray);

// Q4. Replace all null values with 'N/A' in: { name: null, age: 25 }
const info = { name: null, age: 25 };
const replaced = Object.fromEntries(Object.entries(info).map(([k, v]) => [k, v === null ? 'N/A' : v]));
console.log(replaced);

// Q5. Filter properties where value includes 'test' in: { a:'test1', b:'live', c:'unit test' }
const obj5 = { a: 'test1', b: 'live', c: 'unit test' };
const testsOnly = Object.fromEntries(Object.entries(obj5).filter(([k, v]) => v.includes('test')));
console.log(testsOnly);

// Q6. Add 'status: active' to each user in: { u1: {name: 'A'}, u2: {name: 'B'} }
const users2 = { u1: {name: 'A'}, u2: {name: 'B'} };
const updated = Object.fromEntries(Object.entries(users2).map(([k, v]) => [k, { ...v, status: 'active' }]));
console.log(updated);

// Q7. Find the first key with value 'apple': { a: 'banana', b: 'apple', c: 'grape' }
const fruits = { a: 'banana', b: 'apple', c: 'grape' };
const foundKey = Object.keys(fruits).find(k => fruits[k] === 'apple');
console.log(foundKey);

// Q8. Rename key 'oldName' to 'newName' in: { oldName: 'data' }
const oldObj = { oldName: 'data' };
const renamed = { newName: oldObj.oldName };
console.log(renamed);
