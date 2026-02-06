
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



// const { readFile, writeFile } = require('fs')

const { readFile, writeFile } = require('fs').promises



// const util=require('util')
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)


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
    //  const second = await readFilePromise('./content/second.txt','utf8')
    // const first = await readFilePromise('./content/first.txt','utf8')

      const second = await readFile('./content/second.txt','utf8')
    const first = await readFile('./content/first.txt','utf8')

    console.log(first,second);
    // await writeFilePromise('./content/mind-grenade.txt','hello this is my new method of writing by util module',{flag:'a'})
    
    await writeFile('./content/mind-grenade.txt','hello this is my new method of writing by util module',{flag:'a'})
    }
    catch(error){
        console.log(error);
        
    }
   
    
}
start()

