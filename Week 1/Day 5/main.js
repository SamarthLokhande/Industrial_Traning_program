let username;
let password;

function login(){
    
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

if((username=="samarth")&&(password=="123"))
{
    alert("Login Successfully")
}
else
{
    alert("Login Failed")
}
}