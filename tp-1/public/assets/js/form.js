let newAnimal;

addAnimal = () => {
    newAnimal = {
        nombreAnimal: document.getElementById('name').value,
        nombreCientifico: document.getElementById('scientificName').value,
        descripcion: document.getElementById('description').value,
        pesoTamanio: document.getElementById('weightHeight').value,
        zonas: document.getElementById('zones').value,
        dieta: document.getElementById('diet').value,
    };

    fetch ('http://localhost:3000/api/animales', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(newAnimal)
        })
    
        .then (function(res) {
            if (res.ok) {
            console.log('POST completado.');
            return res;
            }
            else
                throw new Error('POST fallido.');
        })
        .catch (function(error) {
            console.log(error);
        });
    }
