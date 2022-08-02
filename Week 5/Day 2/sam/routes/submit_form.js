var express = require ("express");
var router = express.Router();

const user = {username:"samarth",password:"@123"};

router.post("/",(req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (user.username == username && user.password == password)
    {
        res.end("form submitted successfully");
    }
    else
    {
        res.end("username or password are incorrect");
    }    
    console.log(username);
    console.log(password);
});

module.exports = router;