function isAdmin() {
    var saved = localStorage.getItem("currentUser");
    if(!saved)
        return false;
    return JSON.parse(saved).role === "admin";
}

function showUser(user) {
    var buttons = document.getElementById("guestButtons");
    buttons.classList.add("d-none");

    var userMessage = document.getElementById("userMessage");
    userMessage.innerText = "Hello, " + user.username + "!";

    var userInterface = document.getElementById("userInterface");
    userInterface.classList.remove("d-none");
}

function showGuest() {
    document.getElementById("guestButtons").classList.remove("d-none");
    document.getElementById("userInterface").classList.add("d-none");
}

  function setUser() {
      try {
          const user = JSON.parse(localStorage.getItem("currentUser"));
          if(user)
              showUser(user);
      } catch(e) {
          localStorage.removeItem("currentUser");
      }
  }

function logOut() {
    localStorage.removeItem("currentUser");
    showGuest();
}

function start() {
    document.getElementById("logoutButton").addEventListener("click", logOut, false);

    if(localStorage.getItem("currentUser"))
        setUser();
}

window.addEventListener("load", start, false);