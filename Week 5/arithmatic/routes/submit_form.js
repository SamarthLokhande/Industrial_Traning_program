var express = require ("express");
var router = express.Router();

const arithmatic = {addition:"1234567890",subtraction:"1234567890",multiplication:"1234567890",division:"1234567890"};

router.post("/",(req,res,next) => {
    const addition = req.body.addition;
    const subtraction = req.body.subtraction;
    const multiplication = req.body.multiplication;
    const division = req.body.division;


    if (arithmatic.addition == addition && arithmatic.subtraction == subtraction && arithmatic.multiplication == multiplication && arithmatic.division == division)
    {
        res.end("calculate successfully");
    }
    else
    {
        res.end("no. are not found");
    }    
    console.log(addition);
    console.log(subtraction);
    console.log(multiplication);
    console.log(division);
});

module.exports = router;