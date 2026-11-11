function commentBody(name, comment) {
    return (
        '<div class="card mb-2 border-success">' +
            '<div class="card-body">' +
                '<p id="userName" class="text-success font-weight-bold">' +
                    name + ' says:' +
                '</p>' +
                '<ul>' +
                    '<li id="userComment">' +
                        comment +
                    '</li>' +
                '</ul>' +
            '</div>' +
        '</div>'
    );
}

function incrementCommentCnt() {
    var span = document.getElementById("commentCnt");
    span.textContent = parseInt(span.textContent) + 1;
}

function postComment(name, comment) {
    var commentCard = commentBody(name, comment);

    document.getElementById("commentsDiv").innerHTML += commentCard;
    incrementCommentCnt();
}

function addComment(event) {
    event.preventDefault();

    var userName = document.getElementById("nameInput").value.trim();
    var commentInput = document.getElementById("commentInput").value.trim();

    if(!userName || !commentInput) return;

    document.getElementById("submitComment").addEventListener("click", postComment(userName, commentInput), false);
}

function start() {
    var form = document.getElementById("addComment");

    form.addEventListener("submit", addComment, false);
}

window.addEventListener("load", start, false);