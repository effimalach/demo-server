const express = require('express');

const app = express();

app.get('/relative-path',(req,res)=>{
    res.send("data i want to send").end();
});
 
app.post('/relative-path',(req,res)=>{
    res.send("data i want to send").end();
});
app.listen(5000,()=>console.log('app is running'));