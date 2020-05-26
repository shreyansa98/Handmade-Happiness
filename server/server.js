const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");


const app = express();

//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
//Retrieve data from server
app.get('/', (req,res) => {
    res.json("Hello Handmade Happiness");
});

//Send data to the server
app.post("/", (req,res) => {
     console.log(req.body.name);
})



app.listen(3000, (err)=> {
    if(err){
        console.log(err);
    } else {
        console.log("Server successfully connected to PORT", 3000);
    }
});