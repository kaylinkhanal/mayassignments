const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let chunkSize = 3
let chunk = []
debugger
for (let i = 0; i < numbers.length; i += chunkSize) {
    debugger;
    let part = numbers.splice(i, chunkSize)
    debugger
    chunk.push(part)
    debugger
}
debugger
console.log(chunk);
