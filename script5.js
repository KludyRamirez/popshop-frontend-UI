function myFunction() {
    if(alert('Account Created Successfully! Press Ok to Go Back to Login Page')){}
    else window.location.reload(); 
    }

function myPass() {
      if(alert('Password Changed Successfully! Press Ok to Go Back to Login Page')){}
      else window.location.reload(); 
      }

function login() {
    setTimeout(function () {
    window.location.href = "home2.html"; 
       }, 400); 
   
   };

   function home() {
    setTimeout(function () {
    window.location.href = "shop.html"; 
       }, 400); 
   
   };

   function shop() {
    setTimeout(function () {
    window.location.href = "billing.html"; 
       }, 400); 
   
   };

   function login1() {
    setTimeout(function () {
    window.location.href = "login.html"; 
       }, 400); 
   
   };
   function reset() {
    document.getElementById("login").reset();
}
    function purchased(){
        if(alert('Items Purchased Successfully! Thank You!')){}
        else  window.location.href = "home2.html";
    } 
    function payment(){
        if(alert('Items Purchased Successfully! Thank You!')){}
        else  window.location.href = "home2.html";
    } 
    
    function backshop() {
        setTimeout(function () {
        window.location.href = "shop.html"; 
           }, 400);
        }