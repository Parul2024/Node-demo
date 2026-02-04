const {readFileSync , writeFileSync, read}=require('fs') 

console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second= readFileSync('./content/second.txt','utf8')

console.log(first,second);

writeFileSync('./content/result-sync.txt',`hello this is new written file :${first} and ${second}!!!`,
    {flag:'a'}
)
console.log('done with the task');
console.log('starting the next task...');

//in sync file system module the task get executed line by line no other user can 
//perform a task unless previos one is completed
