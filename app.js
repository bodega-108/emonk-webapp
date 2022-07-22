
const { application } = require('express');
const express = require('express');

const app = express();
const port = 8080;

app.use(express.json());

app.use("/",(req,res)=>{
    res.json({
        message:"HELLO EMONK"
    })
})

app.listen(port,()=>{
    console.log("listening on port " + port);
});