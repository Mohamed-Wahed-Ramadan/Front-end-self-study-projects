

    /* <input type="text" placeholder="Full Name" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button type="submit">Submit</button> */

            $(document).ready(function(){
                $(".signup-btn").click(function(e){
                    e.preventDefault();
                  let username = document.getElementById("username").value;
                  let email = document.getElementById("usermail").value;
                  let pass = document.getElementById("userpass").value;
              
                  if(username === "" || email === "" || pass === ""){
                    alert("Please fill all data");
                  } else {
                    localStorage.setItem("username", username);
                    localStorage.setItem("email", email);
                    localStorage.setItem("pass", pass);
                    window.location.href = "sign in.html";
                  }
                });
              });
              