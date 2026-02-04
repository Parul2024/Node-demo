//initailizing the npm module is done automatically
// npm --version
//to install a particular package locally(particular project)
// npm i <packageName>
// globally:can be used used outside the project also npm install -g <packageName>
//package.json (stores info about package/project)  : 
// npm init (step by step created )
// npm init -y (everything default)

const _=require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems);

