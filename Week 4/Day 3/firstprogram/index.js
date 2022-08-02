const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send ('Hello World')
});

app.get('/hello',(req, res) => {
    res.send('I m on second page')
});



app.listen(port, () =>{
    console.log("Hey you're using express")
})