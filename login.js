// Forms
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

// Buttons
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// Show Login by default
if (signupForm) signupForm.style.display = "none";

// Toggle Forms
if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        loginForm.style.display = "flex";
        signupForm.style.display = "none";

        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
    });
}

if (signupBtn) {
    signupBtn.addEventListener("click", () => {
        signupForm.style.display = "flex";
        loginForm.style.display = "none";

        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
    });
}

// SIGNUP
if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();

        if (email === "" || password === "") {
            alert("Please fill all fields");
            return;
        }

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Account Created Successfully!");

        signupForm.reset();

        // Switch to Login Form
        signupForm.style.display = "none";
        loginForm.style.display = "flex";

        signupBtn.classList.remove("active");
        loginBtn.classList.add("active");
    });
}
// LOGIN
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const loginEmail = document.getElementById("loginEmail").value.trim();
        const loginPassword = document.getElementById("loginPassword").value.trim();

        if (loginEmail === "" || loginPassword === "") {
            alert("Please enter Email and Password");
            return;
        }

        alert("Login Successful");
        window.location.href = "dashboard.html";
    });
}