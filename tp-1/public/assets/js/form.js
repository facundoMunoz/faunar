addAnimal = () => {
    let newAnimal = new Array(6);

    newAnimal[0] = document.getElementById('name').value;
    newAnimal[1] = document.getElementById('scientificName').value;
    newAnimal[2] = document.getElementById('description').value;
    newAnimal[3] = document.getElementById('weightHeight').value;
    newAnimal[4] = document.getElementById('zones').value;
    newAnimal[5] = document.getElementById('diet').value;

    console.log(newAnimal);
    return newAnimal;
};