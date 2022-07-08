function fun(){
    alert("external js")
}
let username
let password

function get(){
username=document.getElementById("username").value;
password=document.getElementById("password").value;

if((username=="samarth") && (password=="samarth") ){
alert("login successfully")
}
else
{
alert("login failed")}
}