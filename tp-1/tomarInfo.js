// Tomar id de la url
const currentId = window.location.href.slice(-1);
console.log(currentId);

// Cargar json
fetch("./infoAnimales.json")
    .then((response) => response.json())
    .then((json) => {
        document.querySelector(".name").innerHTML = json[currentId].nombreAnimal;
        document.title = "YaguAr: " + json[currentId].nombreAnimal;
        document.querySelector(".scientific-name").innerHTML = json[currentId].nombreCientifico;
        document.querySelector(".description").innerHTML = json[currentId].descripcion;
        document.querySelector(".location").innerHTML = json[currentId].zonas;
        document.querySelector(".weightHeight").innerHTML = json[currentId].pesoTamanio;
        document.querySelector(".diet").innerHTML = json[currentId].dieta;
        document.querySelector(".background").src = "./img/backgrounds/" + currentId + ".webp";
    });