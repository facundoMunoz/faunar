addAnimal = async () => {
    try {
        const newAnimal = {
            name: document.getElementById('name').value,
            scientificName: document.getElementById('scientificName').value,
            description: document.getElementById('description').value,
            weightHeight: document.getElementById('weightHeight').value,
            zones: document.getElementById('zones').value,
            diet: document.getElementById('diet').value,
            extinction: document.getElementById('extinction').checked,
        };

        const response = await fetch('/api/agregarAnimal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAnimal)
        });

        if (response.ok) {
            document.querySelector(".success-text").classList.remove("hidden");
            document.querySelector(".fail-text").classList.add("hidden");
        } else {
            document.querySelector(".success-text").classList.add("hidden");
            document.querySelector(".fail-text").classList.remove("hidden");
            throw new Error('POST fallido.');
        }
    } catch (error) {
        console.error(error);
    }
}
