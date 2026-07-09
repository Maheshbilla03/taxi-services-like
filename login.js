const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

/* SIGNUP */

signupForm.addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account Created Successfully!");

    signupForm.reset();

});

/* LOGIN */

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if(
        loginEmail === savedEmail &&
        loginPassword === savedPassword
    ){

        alert("Login Successful");

        window.location.href = "dashboard.html";

    }else{

        alert("Wrong Email or Password");

    }

});