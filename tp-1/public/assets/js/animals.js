let currentId = 1;

const createAnimalCard = () => fetch("/api/animal/" + currentId)
    .then((response) => response.json())
    .then((animal) => {
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
    });

const loadMoreAnimals = () => fetch("/api/animals/amount")
    .then((response) => response.json())
    .then((amount) => {
        // Add 3 more animals
        lastAnimalId = currentId + 2;
        while (currentId <= lastAnimalId) {
            createAnimalCard();
            currentId++;
            if (currentId > amount.amount) {
                document.querySelector(".show-more-btn").classList.add("hidden");
                currentId = lastAnimalId + 1;
            }
        }
    });

loadMoreAnimals();