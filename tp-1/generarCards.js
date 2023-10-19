// Cargar json
fetch("./infoAnimales.json")
    .then((response) => response.json())
    .then((json) => {
        const jsonLength = Object.keys(json).length;
        for (let pos = 1; pos <= jsonLength; pos++) {
            // Elements
            let animal = document.createElement("a");
            let name = document.createElement("h2");
            let image = document.createElement("img");
            // Link
            animal.classList.add("animal");
            animal.setAttribute("href", "animal.html#" + pos);
            // Image
            image.setAttribute("src", "./img/animals/" + pos + ".webp");
            image.setAttribute("alt", json[pos].nombreAnimal);
            // Name
            name.classList.add("text");
            name.innerHTML = json[pos].nombreAnimal;

            animal.appendChild(name);
            animal.appendChild(image);
            document.querySelector(".animals").appendChild(animal);
        }
    });