function logIn(event) {
    event.preventDefault();
    hideError("loginError");

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPass").value;

    var users = loadUsers();
    var user;

    var emailExists = false;
    for(var i = 0; i < users.length; i++) {
        if(email === users[i].email) {
            emailExists = true;
            user = users[i];
            break;
        }
    }

    if(!emailExists) {
        showError("loginError", "Email address doesn't exist.");
        return;
    }

    if(password !== user.password) {
        showError("loginError", "Wrong password, please try again.");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify({
        username: user.username,
        email: user.email,
        role: user.role
    }));

    window.location.href = "index.html";
}

function start() {
    const form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", logIn, false);

    document.getElementById("loginEmail").addEventListener("input", () => hideError("loginError"), false);
    document.getElementById("loginPass").addEventListener("input", () => hideError("loginError"), false);
}

window.addEventListener("load", start, false);