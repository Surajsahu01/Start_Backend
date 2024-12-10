const express = require('express');
const app = express();

app.listen(8000, () =>{
    console.log("Server Satrted at port no.8000");
    
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection succesfull")})
.catch( (errpr) => {console.log("Recived an Error.")});
