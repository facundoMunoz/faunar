let currentId = 1;

const createAnimalCard = async () => {
    try {
        const response = await fetch("/api/animal/" + currentId);
        const animal = await response.json();

        // Elements
        let animalCard = document.createElement("a");
        let name = document.createElement("h3");

        // Animal
        animalCard.classList.add("animal-card");

        // Image
        animalCard.style.backgroundImage = "url('assets/media/backgrounds/" + animal.id + ".jpg')";

        // Link
        animalCard.setAttribute("href", "assets/html/animal.html#" + animal.id);

        // Name
        name.classList.add("text");
        name.classList.add("card-name");
        name.innerHTML = animal.name;

        animalCard.appendChild(name);
        document.querySelector(".animal-cards").appendChild(animalCard);
    } catch (error) {
        console.error('Error al crear la tarjeta del animal:', error);
    }
};

const loadMoreAnimals = async () => {
    try {
        const response = await fetch("/api/cantidadAnimales/");
        const amount = await response.json();

        // Add 3 more animals
        lastAnimalId = currentId + 2;
        while (currentId <= lastAnimalId) {
            await createAnimalCard();
            currentId++;
            if (currentId > amount.amount) {
                document.querySelector(".show-more-btn").classList.add("hidden");
                currentId = lastAnimalId + 1;
            }
        }
    } catch (error) {
        console.error('Error al cargar más animales:', error);
    }
};

loadMoreAnimals();
