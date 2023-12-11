let currentUrl = window.location.href;
let currentId = currentUrl.substring(currentUrl.lastIndexOf('#') + 1, currentUrl.length);

// Load data
const getAnimal = () => fetch("/api/animal/" + currentId)
    .then((response) => response.json())
    .then((animal) => {
        // Data
        document.querySelector(".animal-name").innerHTML = animal.name;
        document.querySelector(".scientific-name").innerHTML = animal.scientificName;
        document.querySelector(".animal-text").innerHTML = animal.description;
        document.querySelector(".weight-height-text").innerHTML = animal.weightHeight;
        document.querySelector(".zones-text").innerHTML = animal.zones;
        document.querySelector(".diet-text").innerHTML = animal.diet;
        document.title = "FaunAr: " + animal.name;
        if (animal.extinction) {
            document.querySelector(".extinction").classList.remove("hidden");
        } else {
            document.querySelector(".extinction").classList.add("hidden");
        }

        // Animal image
        document.querySelector(".animal-image").style.backgroundImage = "url(../media/backgrounds/" + currentId + ".jpg)";
    });

// Switch animal
const previousAnimal = () => fetch("/api/animals/amount")
    .then((response) => response.json())
    .then((amount) => {
        if (currentId <= 1) {
            currentId = amount.amount;
        } else {
            currentId--;
        }
        window.location.href = currentUrl.substring(0, currentUrl.lastIndexOf('#') + 1) + currentId;
        getAnimal();
    });

const nextAnimal = () => fetch("/api/animals/amount")
    .then((response) => response.json())
    .then((amount) => {
        if (currentId >= amount.amount) {
            currentId = 1;
        } else {
            currentId++;
        }
        window.location.href = currentUrl.substring(0, currentUrl.lastIndexOf('#') + 1) + currentId;
        getAnimal();
    });

getAnimal();