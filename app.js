const express = require('express')
const app = express();

app.get('/',(req,res,next)=>{
    res.render('hello.ejs');
})

app.listen(3000);