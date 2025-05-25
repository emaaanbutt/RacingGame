import express from 'express';
const port = 4000;

let server = express();

server.use(express.static("public"));
server.set("view engine", "ejs");

server.listen(port, ()=>{
    console.log("Server listening at port ", port);
});

