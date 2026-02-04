// MODULES



const names=require('./4-names')
const sayHi=require('./5-utils')

console.log(names)
sayHi(names.john)
sayHi('susan')
const data=require('./6-alternative-flavour')
console.log(data);

//this execute the function returned as output by the imported module
require('./7-mind-grenade')

// sayHi('susan')
// sayHi(john)
// sayHi(peter)