const express = require('express');
const { useSyncExternalStore } = require('react');
const router = express.Router;

router.get("/signup", (req,res) => {
   
         const username = req.body.username;
         const email = req.body.email;
          const password = req.body.password;
         users.push (username,email,password);
         console.log(users);
});

router.post("/login", (req,res) => {

});

router.delete("/deleteuser/:username", (req,res) => {

});

module.exports = router;