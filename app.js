require("dotenv").config("./env")

const http = require("http");

//------ Variables Being used for Submission ------

//This is the shared Secret using .env...
const hostname = process.env.HOST_NAME;
const port = process.env.PORT_NUMBER;

//shared Secret example...
const secret = process.env.SECRET_KEY;

const fs = require("fs")
let directory_name= "./"
let filenames = fs.readdirSync(directory_name)



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    f = ""
    filenames.forEach((file) =>{
        f = f+file+" \n";
    })

    res.end(f)

});

console.log(secret);

server.listen(port, hostname, ()=>{
    console.log(`The server connected to host: ${hostname} using port: ${port}!`)
})
