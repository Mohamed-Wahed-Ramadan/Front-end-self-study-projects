$(document).ready(function(){
    $(".signup-btn").click(function(e){
        e.preventDefault();
      let email = document.getElementById("usermail").value;
      let pass = document.getElementById("userpass").value;
  
      if( email ==  localStorage.getItem("email", email) && pass == localStorage.getItem("pass", pass)){
        window.location.href = "home.html";
      } else {
        alert("Please fill all data right");
      }
    });
  });