const destinacii = {
    Greece: {
        Athens: { zemja:"Greece", ime: "Athens", let: 130, cena: 130, opis: "Capital city", slika: "greece/athens.jpg", kategorija: "City" },
        Thessaloniki: { zemja:"Greece", ime: "Thessaloniki", let: 110, cena: 120, opis: "Port city", slika: "greece/solun.jpg", kategorija: "Culture" },
        Halkidiki: { zemja:"Greece", ime: "Halkidiki", let: 120, cena: 95, opis: "Sandy beaches", slika: "greece/halkidiki.jpg", kategorija: "Beach" },
        Santorini: { zemja:"Greece", ime: "Santorini", let: 170, cena: 160, opis: "Island", slika: "greece/santorini.jpg", kategorija: "Beach" },
        Corfu: { zemja:"Greece", ime: "Corfu", let: 120, cena: 150, opis: "Island", slika: "greece/corfu.jpg", kategorija: "Beach" }
    },
    Slovenia: {
        Ljubljana: { zemja:"Slovenia", ime: "Ljubljana", let: 180, cena: 105, opis: "Capital city", slika: "slovenia/ljubljana.jpg", kategorija: "City" },
        Koper: { zemja:"Slovenia", ime: "Koper", let: 195, cena: 120, opis: "Coastal town", slika: "slovenia/koper.jpg", kategorija: "Culture" },
        Piran: { zemja:"Slovenia", ime: "Piran", let: 195, cena: 150, opis: "Coastal town", slika: "slovenia/piran.jpg", kategorija: "Beach" }
    },
    Italy: {
        Rome: { zemja:"Italy", ime: "Rome", let: 230, cena: 150, opis: "Capital city", slika: "italy/rome1.jpg", kategorija: "City" },
        Florence: { zemja:"Italy", ime: "Florence", let: 240, cena: 140, opis: "Art hub", slika: "italy/florence.jpg", kategorija: "Culture" },
        Venice: { zemja:"Italy", ime: "Venice", let: 220, cena: 170, opis: "Floating city", slika: "italy/venice.jpg", kategorija: "City" },
        Sicily: { zemja:"Italy", ime: "Sicily", let: 250, cena: 180, opis: "Island", slika: "italy/sicily.jpg", kategorija: "Beach" }
    },
    Spain: {
        Madrid: { zemja:"Spain", ime: "Madrid", let: 250, cena: 150, opis: "Capital city", slika: "spain/madrid.jpg", kategorija: "City" },
        Barcelona: { zemja:"Spain", ime: "Barcelona", let: 250, cena: 160, opis: "Coastal architecture", slika: "spain/barcelona.jpg", kategorija: "Beach" },
        Seville: { zemja:"Spain", ime: "Seville", let: 210, cena: 130, opis: "Province", slika: "spain/seville.jpg", kategorija: "Culture" },
        Valencia: { zemja:"Spain", ime: "Valencia", let: 235, cena: 125, opis: "Seaside city", slika: "spain/valencia.jpg", kategorija: "Beach" }
    }
}

var deletedCards = [];

function calcPrice(let, cena, denovi) {
    return let + cena * denovi;
}

function addCard(zemja, grad, prestoj, cena, kategorija, opis, slika) {
    var id = zemja + "-" + grad;
    var delButtonID = "delButton" + zemja + grad;

    return (
        '<div' + ' id="' + id + '" class="col-4 mb-4">' +
            '<div class="card h-100 shadow-sm destination-card">' +
                '<img src="images/' + slika + '" class="card-img-top" alt="' + grad + '" style="height: 180px; object-fit: cover;">' +
                '<div class="card-body">' +
                    '<h5 class="card-title mb-1">' + grad + '</h5>' +
                    '<h6 class="card-subtitle text-muted mb-2">' + zemja + '</h6>' +
                    '<span class="badge badge-success mb-2">' + kategorija + '</span>' +
                    '<p class="card-text">' + opis + '</p>' +
                '</div>' +
                '<div class="card-footer d-flex justify-content-between align-items-center">' +
                    '<div>' +
                        '<strong id="fullCena" class="h5 mb-0">$' + cena + '</strong>' +
                        '<small id="prestoj" class="d-block text-muted">' + prestoj + (prestoj > 1 ? " denovi" : " den") + '</small>' +
                    '</div>' +
                    '<div>' +
                        '<button id="likeButton' + id + '" type="button" class="btn btn-sm btn-outline-success mr-1">👍<span id="likes' + id + '">0</span></button>' +
                        '<button id="dislikeButton' + id + '" type="button" class="btn btn-sm btn-outline-success mr-1">👎<span id="dislikes' + id + '">0</span></button>' +
                        '<button id="' + delButtonID + '" class="btn btn-sm btn-outline-danger d-none">Delete</button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>'
    );
}

function addAddCard(zemja) {
    return (
        '<div class="col-4 mb-4 d-none" id="addCard' + zemja + '">' +
            '<div class="card h-100 shadow-sm border-success">' +
                '<div class="card-body">' +
                    '<h5 class="card-title text-success mb-2">Add New Destination</h5>' +
                    '<div class="form-group mb-2">' +
                        '<input type="text" class="form-control form-control-sm" id="cityInput' + zemja + '" placeholder="City name">' +
                    '</div>' +
                    '<div class="form-group mb-2">' +
                        '<input type="text" class="form-control form-control-sm" id="catInput' + zemja + '" placeholder="Category - City, Beach">' +
                    '</div>' +
                    '<div class="form-group mb-2">' +
                        '<input type="number" class="form-control form-control-sm" id="priceInput' + zemja + '" placeholder="Price">' +
                    '</div>' +
                    '<div class="form-group mb-3">' +
                        '<input type="text" class="form-control form-control-sm" id="opisInput' + zemja + '" placeholder="Description">' +
                    '</div>' +
                    '<button id="addButton' + zemja + '" type="button" class="btn btn-sm btn-success btn-block">Add Destination</button>' +
                '</div>' +
            '</div>' +
        '</div>'
    );
}

function addNewDest(zemja) {
    var cityInput = document.getElementById("cityInput" + zemja).value.trim();
    var catInput = document.getElementById("catInput" + zemja).value.trim();
    var priceInput = parseInt(document.getElementById("priceInput" + zemja).value);
    var opisInput = document.getElementById("opisInput" + zemja).value.trim();

    if(!cityInput || !catInput || isNaN(priceInput) || !opisInput) {
        alert("Popolni gi site kategorii");
        return;
    }

    destinacii[zemja][cityInput] = {
        zemja: zemja,
        ime: cityInput,
        let: 100,
        cena: priceInput,
        opis: opisInput,
        slika: zemja.toLowerCase() + "/" + cityInput.toLowerCase() + ".jpg",
        kategorija: catInput
    }

    placeAllDest();
}

function adminControls() {
    if(!isAdmin())
        return;

    for(var zemja in destinacii) {
        var cardEl = document.getElementById("addCard" + zemja);
        if(cardEl)
            cardEl.classList.remove("d-none");

        var addButton = document.getElementById("addButton" + zemja);
        if(addButton) {
            (function(z) {
                addButton.addEventListener("click", function () {
                    addNewDest(z);
                }, false);
            })(zemja);
        }

        for(var grad in destinacii[zemja]) {
            var gradObj = destinacii[zemja][grad];
            var cardID = gradObj.zemja + "-" + gradObj.ime;
            var gradEl = document.getElementById(cardID);

            if(gradEl) {
                var delButton = document.getElementById("delButton" + gradObj.zemja + gradObj.ime);
                delButton.classList.remove("d-none");

                (function(delID) {
                    delButton.addEventListener("click", function() {
                        deleteCard(delID);
                    }, false);
                })(cardID);
            }
        }
    }
}

function likeControls() {
    for(var zemja in destinacii) {
        for(var grad in destinacii[zemja]) {
            var gradObj = destinacii[zemja][grad];
            var cardID = gradObj.zemja + "-" + gradObj.ime;

            var likeButton = document.getElementById("likeButton" + cardID);
            (function(ID) {
                likeButton.addEventListener("click", function() {
                    incLikes(ID);
                }, false);
            })(cardID);

            var dislikeButton = document.getElementById("dislikeButton" + cardID);
            (function(ID) {
                dislikeButton.addEventListener("click", function() {
                    incDislikes(ID);
                }, false);
            })(cardID);
        }
    }
}

function incLikes(ID) {
    var span = document.getElementById("likes" + ID);
    span.textContent = parseInt(span.textContent) + 1;
}

function incDislikes(ID) {
    var span = document.getElementById("dislikes" + ID);
    span.textContent = parseInt(span.textContent) + 1;
}

function deleteCard(cardID) {
    document.getElementById(cardID).classList.add("d-none");
    if(!deletedCards.includes(cardID))
        deletedCards.push(cardID);
}

function reset() {
    document.getElementById("searchInput").value = "";
    document.getElementById("stayInput").value = 1;
    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox4").checked = false;
    document.getElementById("minPrice").value = null;
    document.getElementById("maxPrice").value = null;

    deletedCards = [];

    placeAllDest();
}

function placeAllDest() {
    var stayDuration = parseInt(document.getElementById("stayInput").value);

    if(!stayDuration)
        stayDuration = 1;

    for(var zemja in destinacii) {
        var dest = document.getElementById(zemja);
        dest.innerHTML = "";

        for(var grad in destinacii[zemja]) {
            const gradObj = destinacii[zemja][grad];
            var fullPrice = calcPrice(gradObj.let, gradObj.cena, stayDuration);

            dest.innerHTML += addCard(gradObj.zemja, gradObj.ime, stayDuration, fullPrice, gradObj.kategorija, gradObj.opis, gradObj.slika);
        }

        dest.innerHTML += addAddCard(zemja);
    }

    for(var i = 0; i < deletedCards.length; i++) {
        var cardEl = document.getElementById(deletedCards[i]);
        if(cardEl)
            cardEl.classList.add("d-none");
    }

    likeControls();
    adminControls();
}

function filterDest() {
    var searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    var stayInput = parseInt(document.getElementById("stayInput").value);
    if(isNaN(stayInput) || stayInput < 1) stayInput = 1; 

    var checkbox1 = document.getElementById("checkbox1").checked;
    var checkbox2 = document.getElementById("checkbox2").checked;
    var checkbox3 = document.getElementById("checkbox3").checked;
    var checkbox4 = document.getElementById("checkbox4").checked;
    var zemjiBool = (checkbox1 || checkbox2 || checkbox3 || checkbox4);

    var minPrice = parseInt(document.getElementById("minPrice").value);
    var maxPrice = parseInt(document.getElementById("maxPrice").value);

    if(!searchInput && !stayInput && !minPrice && !maxPrice && !checkbox1 && !checkbox2 && !checkbox3 && !checkbox4)
        return;

    for(var zemja in destinacii) {
        for(grad in destinacii[zemja]) {
            var gradObj = destinacii[zemja][grad]
            var cardID = gradObj.zemja + "-" + gradObj.ime;
            var cardEl = document.getElementById(cardID);

            if(!cardEl) continue;

            if(deletedCards.includes(cardID)) {
                cardEl.classList.add("d-none");
                continue;
            }

            var fullPrice = calcPrice(gradObj.let, gradObj.cena, stayInput);
            cardEl.querySelector("#fullCena").textContent = "$" + fullPrice;
            cardEl.querySelector("#prestoj").textContent = stayInput + (stayInput == 1 ? " den" : " denovi");

            var isHidden = false;

            var searchBool = !searchInput || (
                searchInput == gradObj.zemja.trim().toLowerCase() || 
                searchInput == gradObj.ime.trim().toLowerCase() ||
                searchInput == gradObj.kategorija.trim().toLowerCase()
            );

            var greeceBool = (checkbox1 && gradObj.zemja == "Greece");
            var italyBool = (checkbox2 && gradObj.zemja == "Italy");
            var spainBool = (checkbox3 && gradObj.zemja == "Spain");
            var sloveniaBool = (checkbox4 && gradObj.zemja == "Slovenia");

            var minBool = (!isNaN(minPrice) && minPrice > fullPrice);
            var maxBool = (!isNaN(maxPrice) && maxPrice < fullPrice);
            console.log("PRICE: $" + fullPrice);
            console.log("MINBOOL: " + minBool);
            console.log("MAXBOOL: " + maxBool);

            if(searchBool)
                cardEl.classList.remove("d-none");
            else {
                cardEl.classList.add("d-none");
                isHidden = true;
            }

            if(isHidden) continue;

            if(zemjiBool){
                if(greeceBool || italyBool || spainBool || sloveniaBool)
                    cardEl.classList.remove("d-none");
                else {
                    cardEl.classList.add("d-none");
                    isHidden = true;
                }
            }

            if(isHidden) continue;

            if(!minBool && !maxBool)
                cardEl.classList.remove("d-none");
            else
                cardEl.classList.add("d-none");
        }
    }
}

function start() {
    var filterButton = document.getElementById("filterButton");
    var resetButton = document.getElementById("resetButton");

    filterButton.addEventListener("click", filterDest, false);
    resetButton.addEventListener("click", reset, false);

    placeAllDest();

    if (window.location.hash) {
        setTimeout(function() {
            var targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
}

window.addEventListener("load", start, false);