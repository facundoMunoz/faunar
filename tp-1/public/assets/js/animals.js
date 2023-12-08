loadMoreAnimals = () => {
    // Add 3 more animals
    for (let newAnimal = 1; newAnimal <= 3; newAnimal++) {
        // Elements
        let animal = document.createElement("a");
        let name = document.createElement("h3");
        // Animal
        animal.classList.add("animal-card");
        // Image
        // TODO: change for image url
        animal.style.backgroundImage = "url('assets/media/backgrounds/" + newAnimal + ".jpg')";
        // Link
        animal.setAttribute("href", "assets/html/animal.html#" + newAnimal);
        // Name
        name.classList.add("text");
        name.classList.add("card-name");
        // TODO: change for name
        name.innerHTML = "Nombre animal";

        animal.appendChild(name);
        document.querySelector(".animal-cards").appendChild(animal);
    }
};

loadMoreAnimals();