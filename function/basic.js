function hello(){
    return 200-11
}

// pure and impure function 
// reduce loop in  js 

const name1 = ['ram', 'sita', 'hari']
const output = name1.map(name => ('Hi ' + name))
console.log(output);


const name2 = ['ram', 'sita', 'hari']
const Hi = name2.filter(name => name === 'sita')
console.log(Hi);

const name3 = ['ram', 'sita', 'hari'];
name3.forEach(name =>{
  console.log('Hi world ' + name)
})

