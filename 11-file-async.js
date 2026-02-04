const {readFile , writeFile}=require('fs')

console.log('start..');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
        
    }
    const first = result;
    writeFile('./content/result-sync.txt',
        `this is new asynchronous method of writting:${first}`,{flag:'a'}
        ,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        // console.log(result);
        console.log('done with the task');
        
        
    })
})

console.log('starting the next task...');

