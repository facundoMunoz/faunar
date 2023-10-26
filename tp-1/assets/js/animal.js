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

// Load json
fetch("../js/infoAnimales.json")
    .then((response) => response.json())
    .then((json) => {
        let currentId = window.location.href;
        let animalImage = document.createElement("img");
        currentId = currentId.substring(currentId.indexOf('#') + 1, currentId.length);

        document.querySelector(".animal-id h2").innerHTML = json[currentId].nombreAnimal;
        /*if (currentId < 10)
            document.querySelector(".animal-id h2").innerHTML = "#0" + currentId;
        else {
            document.querySelector(".animal-id h2").innerHTML = "#" + currentId;
        }*/

        // Data
        document.querySelector(".name").innerHTML = json[currentId].nombreAnimal;
        document.querySelector(".name-text").innerHTML = json[currentId].descripcion;
        document.querySelector(".location").innerHTML = json[currentId].zonas;
        document.querySelector(".weightHeight").innerHTML = json[currentId].pesoTamanio;
        document.querySelector(".diet").innerHTML = json[currentId].dieta;

        // Animal image
        /*animalImage.setAttribute("src", "url(assets/media/animals/" + currentId + ".png)");*/
        animalImage.src = "../media/animals/" + currentId + ".png";
        animalImage.classList.add("background-animal");
        document.querySelector(".header").appendChild(animalImage);
    });