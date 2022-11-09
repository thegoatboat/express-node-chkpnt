const express = require('express')
const app =express();
const date = require('./midelware/date')

const port=5002;

app.use(express.static('public'))
app.use('/css',express.static(__dirname + "./public/app.css"))




app.get('/get',(req,res)=>{
    res.send('you did first express project')
})

app.use('/stat',express.static(__dirname + '/public'))

app.get('/home',date,(req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/Service',date,(req,res)=>{
    res.sendFile(__dirname + '/public/Service.html')
})

app.get('/ContactUs',date,(req,res)=>{
    res.sendFile(__dirname + '/public/contactUs.html')
})



app.listen(port,err=>{
err?console.log(err):console.log(`you are connected with port ${port}`)
})