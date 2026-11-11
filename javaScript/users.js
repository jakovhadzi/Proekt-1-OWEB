function hideError(boxID) {
    document.getElementById(boxID).classList.add("d-none");
}

function showError(boxID, message) {
    const box = document.getElementById(boxID);
    box.textContent = message;
    box.classList.remove("d-none");
}

function User(username, email, password, role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role || "user";
}

const defaultUsers = [
    new User("user1", "proba@gmail.com", "pass1234"),
    new User("user2", "proba1@gmail.com", "pass1234"),
    new User("admin", "admin@gmail.com", "admin1234", "admin")
];

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
    const saved = localStorage.getItem("users");
    if(saved) {
        return JSON.parse(saved).map(u => new User(u.username, u.email, u.password, u.role));
    }

    saveUsers(defaultUsers);
    return(defaultUsers);
}