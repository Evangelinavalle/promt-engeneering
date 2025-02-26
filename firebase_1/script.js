function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful! Redirecting to your account...");
            window.location.href = "home.html"; // Redirect to home page
        })
        .catch(error => {
            alert("Login failed: " + error.message);
        });
}

function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account created! You can now log in.");
        })
        .catch(error => {
            alert("Signup failed: " + error.message);
        });
}
