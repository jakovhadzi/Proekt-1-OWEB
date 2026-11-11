function signUp(event) {
    event.preventDefault();

    hideError("signupError");

    var email = document.getElementById("signupEmail").value.trim().toLowerCase();
    var username = document.getElementById("signupUser").value.trim();
    var password = document.getElementById("signupPass").value;
    var passCopy = document.getElementById("signupPassCopy").value;

    if(password !== passCopy) {
        showError("signupError", "Passwords don't match.");
        return;
    }

    var users = loadUsers();

    var emailTaken = false;
    var userTaken = false;
    for(var i = 0; i < users.length; i++) {
        if(users[i].email === email)
            emailTaken = true;
        if(users[i].username === username)
            userTaken = true;
    }

    if(emailTaken) {
        showError("signupError", "A user with that email already exists.");
        return;
    }

    if(userTaken) {
        showError("signupError", "A user with that username already exists.");
        return;
    }

    users.push(new User(username, email, password));
    saveUsers(users);

    window.location.href = "login.html";
}

function start() {
    var form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", signUp, false);

    document.getElementById("signupEmail").addEventListener("input", () => hideError("signupError"), false);
    document.getElementById("signupUser").addEventListener("input", () => hideError("signupError"), false);
    document.getElementById("signupPass").addEventListener("input", () => hideError("signupError"), false);
    document.getElementById("signupPassCopy").addEventListener("input", () => hideError("signupError"), false);
}

window.addEventListener("load", start, false);