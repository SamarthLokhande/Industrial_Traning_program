const express = require('express');
const app = express();

const port = 3000;

function factorial(n){
    let answer = 1;
    if(n==0 || n==1){
        return answer;
    }else{
        for(var i=n; i>=1; i--){
            answer = answer*i;
        }
    return answer;
    }}


const myLogger = function (req,res,next) {
console.log('logged')
next()
}

const myLogger2 = function (req,res,next) {
    const fact = Number(req.query.fact);
    const ans = factorial(fact);
    res.send("The factorial of" + fact + "is" +ans);
    next()
}


app.use(myLogger);
app.use(myLogger2);



app.get('/',(req,res) => {
    res.send("hey")
});

app.listen(port);

module.exports = app;
