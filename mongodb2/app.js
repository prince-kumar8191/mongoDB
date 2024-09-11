const express = require('express');
const app = express();
const path = require('path');
const port = 3002;
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose
.connect("mongodb://localhost:27017/mydatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connect to mongodb");
})
.catch((err)=>{
    console.error("Failed to connect mongodb");
});

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

const indexRouter = require("./routes/index");
app.use("/",indexRouter);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

