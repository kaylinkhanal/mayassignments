// 1. Use filter to return only even numbers from [1, 2, 3, 4, 5, 6]
const numbers1 = [1, 2, 3, 4, 5, 6];
const evens = numbers1.filter(num => num % 2 === 0);
console.log(evens);

// 2. Use map to return an array of squares for [2, 4, 6]
const numbers2 = [2, 4, 6];
const squares = numbers2.map(num => num * num);
console.log(squares);

// 3. Use forEach to log "Task complete:" followed by each task in ['task1', 'task2', 'task3']
const tasks = ['task1', 'task2', 'task3'];
tasks.forEach(task => console.log('Task complete: ' + task));

// 4. Use map to return the length of each word in ['apple', 'banana', 'cherry']
const fruits = ['apple', 'banana', 'cherry'];
const lengths = fruits.map(fruit => fruit.length);
console.log(lengths);

// 5. Use filter to return only words longer than 3 characters in ['sun', 'moon', 'sky', 'cloud']
const words = ['sun', 'moon', 'sky', 'cloud'];
const longWords = words.filter(word => word.length > 3);
console.log(longWords);

// 6. Use forEach to log "Index i: value" for each item in ['a', 'b', 'c']
const letters = ['a', 'b', 'c'];
letters.forEach((val, index) => console.log(`Index ${index}: ${val}`));

// 7. Use map to add 5 to every number in [5, 10, 15]
const nums = [5, 10, 15];
const plusFive = nums.map(num => num + 5);
console.log(plusFive);

// 8. Use filter to remove all falsy values from [0, 'yes', '', null, 'no']
const mixed = [0, 'yes', '', null, 'no'];
const truthy = mixed.filter(item => Boolean(item));
console.log(truthy);
