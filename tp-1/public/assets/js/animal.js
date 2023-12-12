let currentUrl = window.location.href;
let currentId = currentUrl.substring(currentUrl.lastIndexOf('#') + 1, currentUrl.length);

// Load data
const getAnimal = async () => {
    try {
        const response = await fetch("/api/animal/" + currentId);
        const animal = await response.json();

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
    } catch (error) {
        console.error('Error al obtener el animal:', error);
    }
};

// Switch animal
const getAnimalsAmount = async () => {
    try {
        const response = await fetch("/api/cantidadAnimales/");
        const amount = await response.json();
        return amount.amount;
    } catch (error) {
        console.error('Error al obtener la cantidad de animales:', error);
        return 0;
    }
};

const previousAnimal = async () => {
    const amount = await getAnimalsAmount();
    if (currentId <= 1) {
        currentId = amount;
    } else {
        currentId--;
    }
    window.location.href = currentUrl.substring(0, currentUrl.lastIndexOf('#') + 1) + currentId;
    await getAnimal();
};

const nextAnimal = async () => {
    const amount = await getAnimalsAmount();
    if (currentId >= amount) {
        currentId = 1;
    } else {
        currentId++;
    }
    window.location.href = currentUrl.substring(0, currentUrl.lastIndexOf('#') + 1) + currentId;
    await getAnimal();
};

getAnimal();
