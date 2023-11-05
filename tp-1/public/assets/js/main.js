// Full-page scroll
addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
        pageUp();
    } else {
        pageDown();
    }
});

const pageDown = () => {
    document.querySelector(".animals").scrollIntoView();
};

const pageUp = () => {
    document.querySelector(".header").scrollIntoView();
};

// Load json
fetch("/informacion")
    .then((response) => response.json())
    .then((json) => {
        const jsonLength = Object.keys(json).length;
        for (let pos = 1; pos <= jsonLength; pos++) {
            // Elements
            let animal = document.createElement("article");
            let name = document.createElement("h2");
            let image = document.createElement("img");
            let link = document.createElement("a");
            // Animal
            animal.classList.add("card");
            animal.classList.add("card__article");
            animal.classList.add("swiper-slide");
            // Image
            image.setAttribute("src", "assets/media/logos/" + pos + ".webp");
            image.setAttribute("alt", json[pos].nombreAnimal);
            // Link
            link.innerHTML = "Ver más";
            link.classList.add("card__button");
            link.setAttribute("href", "assets/html/animal.html#" + pos);
            // Name
            name.classList.add("text");
            name.innerHTML = json[pos].nombreAnimal;

            animal.appendChild(image);
            animal.appendChild(name);
            animal.appendChild(link);
            document.querySelector(".swiper-wrapper").appendChild(animal);
        }
        aSyncLoad("assets/js/swiper-bundle.min.js");
        aSyncLoad("assets/js/swiper.js");
    });

function aSyncLoad(src) {
    let doc = document.createElement('script');
    doc.src = src;
    doc.type = "text/javascript";
    doc.async = false;
    document.querySelector("head").appendChild(doc);
}