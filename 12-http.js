  const http=require('http')

  const server =http.createServer((req,res)=>{
    // console.log(req)

    if(req.url==='/'){
        res.end(`<h1><b>WELCOME TO MY HOMEPAGE</b></h1>`)
    }
    else if(req.url==='/about'){
        res.end(`<h1><b> Here is our short history </b></h1>`)
    }
    else{
        res.end(`<h1>Oops</h1>
        <p>There is nothing to see on this page</p>
        <a href='/'>Back Home </a>`)
    }
  })
  server.listen(5000)