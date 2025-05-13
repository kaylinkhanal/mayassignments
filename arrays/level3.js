let scores =  {
    math: [43,54,62,32],
    computer: [45,56,33,44]
}
//destructuring
const [goppal, shyam, krish, ram] = scores.math

console.log(krish)

const onlineUsers = [
    ['ram','close friend'],
    ['gopal','friend']
]

//accessing nested array
// close friend
console.log(onlineUsers[0][1])



const person = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "isEmployed": true,
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zipCode": "12345"
    },
    "phoneNumbers": [
      {
        "type": "home",
        "number": "555-123-4567"
      },
      {
        "type": "mobile",
        "number": "555-987-6543"
      }
    ],
    "hobbies": ["reading", "hiking", "coding"],
    "job": null // Example of a null value
  };
  
  //mobile

person.job= 'software engineer'

console.log(person)