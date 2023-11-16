let currentUrl = window.location.href;
let currentId = 0;
let animalsAmount = 0;
let data;

getAnimal();

// Full-page scroll
addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
        pageUp();
    } else {
        pageDown();
    }
});

const pageDown = () => {
    document.querySelector(".cards").scrollIntoView();
};

const pageUp = () => {
    document.querySelector(".header").scrollIntoView();
};

// Load data
const loadInfo = () => {
    currentUrl = window.location.href;
    currentId = currentUrl.substring(currentUrl.lastIndexOf('/') + 1, currentUrl.length);
    
    document.querySelector(".animal-id h2").innerHTML = data[currentId].nombreAnimal;

    // Data
    document.querySelector(".name").innerHTML = data[currentId].nombreAnimal;
    document.querySelector(".name-text").innerHTML = data[currentId].descripcion;
    document.querySelector(".location").innerHTML = data[currentId].zonas;
    document.querySelector(".weightHeight").innerHTML = data[currentId].pesoTamanio;
    document.querySelector(".diet").innerHTML = data[currentId].dieta;
    document.title = "FaunAr: " + data[currentId].nombreAnimal;

    // Animal image
    document.querySelector(".animal-img").src = "../media/animals/" + currentId + ".png";
}

//antes habia "../js/infoAnimales.json"
//fetch("../../informacion")
// fetch("../storage/infoAnimales.json")
const getAnimal = () => fetch("/informacion")
    .then((response) => response.json())
    .then((json) => {
        data = json;
        animalsAmount = Object.keys(json).length;
        loadInfo();
    });

// Switch animal
const previousAnimal = () => {
    if (currentId <= 1) {
        currentId = animalsAmount;
    } else {
        currentId--;
    }
    window.location.href = currentUrl.substring(0,currentUrl.lastIndexOf('/') + 1) + currentId;
    getAnimal();
    loadInfo();
}

const nextAnimal = () => {
    if (currentId >= animalsAmount) {
        currentId = 1;
    } else {
        currentId++;
    }
    window.location.href = currentUrl.substring(0,currentUrl.lastIndexOf('/') + 1) + currentId;
    getAnimal();
}