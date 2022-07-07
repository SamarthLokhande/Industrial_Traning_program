
            function fun(){
            alert("external js")
        }
let username
let password

function get(){
   username=document.getElementById("username").value;
    password=document.getElementById("password").value;

    if((username=="test") && (password=="test1") ){
        alert("login successfully ")
    }
    else
       {
        alert("login failed")}
}
        
    