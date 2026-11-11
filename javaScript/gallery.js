const galleryID = [
    "GreeceAthens1", "GreeceAthens2", "GreeceAthens3", "GreeceAthens4",
    "SloveniaLjubljana1", "SloveniaLjubljana2", "SloveniaLjubljana3", "SloveniaLjubljana4",
    "ItalyRome1", "ItalyRome2", "ItalyRome3", "ItalyRome4",
    "SpainMadrid1", "SpainMadrid2", "SpainMadrid3", "SpainMadrid4"
]

function likeControls() {
    for(var i = 0; i < galleryID.length; i++) {
        var id = galleryID[i];

        var likeButton = document.getElementById("likeBtn" + id);
        if(likeButton) {
            likeButton.addEventListener("click", function(likeID) {
                return function() {
                    var span = document.getElementById("likes" + likeID);
                    span.textContent = parseInt(span.textContent) + 1;
                }
            }(id), false);
        }

        var dislikeButton = document.getElementById("dislikeBtn" + id);
        if(dislikeButton) {
            dislikeButton.addEventListener("click", function(dislikeID) {
                return function() {
                    var span = document.getElementById("dislikes" + dislikeID);
                    span.textContent = parseInt(span.textContent) + 1;
                }
            }(id), false);
        }
    }
}

function start() {
    likeControls();
}

window.addEventListener("load", start, false);