const user ={
    primaryAddress: {
        street: "123 Main St",
    },
    secondaryAddress: {
      zip:{
        lat:32.34,
        lon:83.32,
        code: 30002
      }
    }
}

//optional chaining 

console.log(user.primaryAddress?.zip?.code)

