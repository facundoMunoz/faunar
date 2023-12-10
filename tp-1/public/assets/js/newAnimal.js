addAnimal = () => {
    let newAnimal;

    newAnimal = {
        name: document.getElementById('name').value,
        scientificName: document.getElementById('scientificName').value,
        description: document.getElementById('description').value,
        weightHeight: document.getElementById('weightHeight').value,
        zones: document.getElementById('zones').value,
        diet: document.getElementById('diet').value,
        extinction: document.getElementById('extinction').checked,
    };

    fetch('http://localhost:3000/api/animales', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAnimal)
    })
        .then(function (res) {
            if (res.ok) {
                console.log('POST completado.');
                return res;
            }
            else
                throw new Error('POST fallido.');
        })
        .catch(function (error) {
            console.log(error);
        });
}