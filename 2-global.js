//Global -no window in node as here we cannot manipulate DOM browser is not present,
//global is an object that represents the global namespace, 
// similar to the window object in a web browser. Variables and functions attached to the global object are accessible from anywhere in the application without requiring explicit imports, across all modules. 

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

bconsole.log(__dirname);
console.log(__filename);
setInterval(()=>{
    console.log(`hello world`)
},1000);



