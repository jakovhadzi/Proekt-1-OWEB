function rating() {
    document.getElementById("ratingValue").textContent = document.getElementById("ratingInput").value;
}

function getRadio(name) {
    var radio = document.getElementsByName(name);
    for(var i = 0; i < radio.length; i++) {
        if(radio[i].checked)
            return radio[i].value;
    }
}

function submit(event) {
    event.preventDefault();

    var name = document.getElementById("nameInput").value.trim();
    var age = document.getElementById("ageInput").value;
    var source = getRadio("src");
    var rating = document.getElementById("ratingInput").value;
    var comment = document.getElementById("commentInput").value.trim();

    document.getElementById("userName").textContent = name;
    document.getElementById("collectedData").innerHTML = 
        "<p>Age group: " + age + "</p>" +
        "<p>Found us through: " + source + "</p>" +
        "<p>Overall impression: " + rating + "/10</p>" +
        "<p>Comments: " + comment + "</p>";

        document.getElementById("surveyCard").classList.remove("d-none");
        document.getElementById("thanksCard").classList.remove("d-none");
}

function start() {
    var form = document.getElementById("surveyForm");

    form.addEventListener("submit", submit, false);
    document.getElementById("ratingInput").addEventListener("input", rating, false);
}

window.addEventListener("load", start, false);