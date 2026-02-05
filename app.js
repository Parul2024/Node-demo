//initailizing the npm module is done automatically
// npm --version
//to install a particular package locally(particular project)
// npm i <packageName>
// globally:can be used used outside the project also npm install -g <packageName>
//package.json (stores info about package/project)  : 
// npm init (step by step created )
// npm init -y (everything default)

// npm install downloads node_modules after cloning a project without it from github

// const _ = require('lodash')

// const items=[1,[2,[3,[4,[5]]]]]
// const newItems=_.flattenDeep(items)
// console.log(newItems);
// console.log('hello world...');

// console.log('first task');
// setTimeout(()=>{
//     console.log('second task');
    
// },1000)
// console.log('third task');


// setInterval(()=>{
//     console.log('hello world');
    
// },1000);
// console.log('i will run first due to callback');




// const http=require('http')

//   const server =http.createServer((req,res)=>{
//     // console.log(req)
// console.log('request event');
// res.end('hello world')
// })
//   server.listen(5000,()=>{
//     console.log('server listening on port :5000 .....');
    
//   })



const { readFile, writeFile } = require('fs')
const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)


const getText=(path)=>{
    return new Promise ((resolve,reject)=>{
 readFile(path,'utf8',(err,data)=>{
    if(err){
        reject(err)
    }
    else {
        resolve(data)
    }
})
    })
   
}
// getText('./content/first.txt').then(result=>console.log(result)).catch(err=>console.log(err));



const start=async()=>{
    try{
    // const first=await getText('./content/first.txt')
     const second = await readFilePromise('./content/second.txt','utf8')
    const first = await readFilePromise('./content/first.txt','utf8')

    console.log(first,second);
    writeFilePromise('./content/first.txt','hello this is my new method of writing by util module',{flag:'a'})
    }
    catch(error){
        console.log(error);
        
    }
   
    
}
start()

git