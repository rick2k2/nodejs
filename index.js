const PORT = 80;
const host_name = "localhost";

const http = require('http');

const  fs =  require('fs');
const  p =  require('path');

const home = fs.readFileSync('./index.html', 'utf8');

const server = http.createServer((req,res,next)=>{
    const url  =  req.url;
    // console.log(__dirname);
    // console.log(__filename);
    // console.log(p);

    if(url == "/"){
        // res.end("<h1>Home page</h1>");
        return res.end(home);
    }
    else if(url == "/about"){
        return res.end("<h1>About page</h1>");
    }
    else if(url == "/contact"){
        return res.end("<h1>Contact page</h1>");
    }
    else if(url == "/service"){
        return res.end("<h1>Service page</h1>");
    }
    else if(url == "/business"){
        return res.end("<h1>Business page</h1>");
    }
    else if(url == "/sales"){
        return res.end("<h1>Sales page</h1>");
    }
    else if(url == "/payment"){
        return res.end("<h1>Payment page</h1>");
    }
    else{
        return res.end("<h1>404 page not Found</h1>"); 
    }
});


server.listen(PORT,host_name,()=>{
    console.log(`Server is Working on Port: ${PORT}`);
});
