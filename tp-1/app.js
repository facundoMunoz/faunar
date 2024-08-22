/* --- Configuración del Servidor --- */

const ip = 'localhost';

// Trae la libreria "express" para hacer un servidor web
const express = require('express');
const path = require('path');
const fs = require('fs'); // Para obtener json y parsear
const servicios = require('./servicios');
const promesa = fs.promises;

// Instancia
const app = express();
const port = 3000;

// Abre el servidor
// Para probar en una red local reemplazar ip por la ip del host
// TODO: tomar la ip del host automaticamente
app.listen(port, ip, () => {
  console.log('Server running on port ', port);
});

// Hace publico el folder de la pagina
app.use(express.static('public'));

// Para mostrar formateado un json en navegador
app.use(express.json());
app.set('json spaces', 2);

/* --- Endpoint POST ANIMAL api/animales (unica post)--- */
app.post('/api/agregarAnimal', async (req, res) => {
  const nuevoAnimal = req.body;
  try {
    // Obtén el JSON de manera asíncrona
    const jsonAnimales = await servicios.obtenerAnimales();
    nuevoAnimal.id = Object.keys(jsonAnimales).length + 1;

    jsonAnimales.push(nuevoAnimal);

    // Modifica el JSON original de manera asíncrona
    await promesa.writeFile(
      'storage/animales.json',
      JSON.stringify(jsonAnimales, null, 2),
      'utf8'
    );

    console.log('Nuevo archivo json con la información añadida.');
    res.json(jsonAnimales);
    res.status(201).send();
  } catch (err) {
    console.error('Error al agregar nuevo animal:', err);
    res.status(500).json({ error: 'Error al agregar nuevo animal.' });
  }
});

/** --- Endpoint PUT modifica animal (unicu put) --- */
app.put('/api/modificarAnimal/:id', async (req, res) => {
  const animalId = req.params.id - 1;
  const infoNueva = req.body;

  try {
    // Obtiene el animal de manera asíncrona
    const jsonAnimales = await servicios.obtenerAnimales();
    const animalExistente = jsonAnimales[animalId];

    //Si es negativo o excede el indice el valor que toma es undefined y no ingresa.
    //Si no es undefined (encuentra el animal por el id), realiza la actualizacion.
    if (animalExistente) {
      // Fusiona el animal existente con la información nueva
      const animalModificado = { ...animalExistente, ...infoNueva };
      jsonAnimales[animalId] = animalModificado;

      // Modifica el animal en el archivo JSON de manera asíncrona
      await promesa.writeFile(
        'storage/animales.json',
        JSON.stringify(jsonAnimales, null, 2),
        'utf8'
      );

      res.status(200).send('Animal modificado exitosamente.');
    } else {
      res.status(404).send('404 Not Found: Animal solicitado no existe.');
    }
  } catch (err) {
    console.error('Error al modificar el animal:', err);
    res.status(500).send('Error al modificar el animal.');
  }
});

/* --- Endpoints GETS --- */

// DEVUELVE JSON CON UN UNICO ANIMAL SOLICITADO SEGUN :id
app.get('/api/animal/:id', async (req, res) => {
  const jsonAnimales = await servicios.obtenerAnimales();
  // Comprobamos no exceder la cantidad de animales existentes en el json, de lo contrario devuelve 404.
  if (req.params.id > 0 && req.params.id <= Object.keys(jsonAnimales).length)
    res.json(jsonAnimales[req.params.id - 1]);
  else res.status(404).send('404 Not Found: Animal solicitado no existe.');
});

app.get('/api/cantidadAnimales/', async (req, res) => {
  const jsonAnimales = await servicios.obtenerAnimales();
  res.json({ amount: Object.keys(jsonAnimales).length });
});

// Paginado para lista de animales
app.get('/api/animales', async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  try {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const animals = await servicios.obtenerAnimales();

    const resultsAnimals = {};

    if (endIndex < animals.length) {
      resultsAnimals.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      resultsAnimals.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    resultsAnimals.results = animals.slice(startIndex, endIndex);

    res.json(resultsAnimals);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/* --- Endpoint GET ANIMALES QUERY solicitada api/animales?cantidad=n&from=m --- */

app.get('/api/devolverNAnimales', async (req, res) => {
  const jsonAnimales = await servicios.obtenerAnimales();
  let inicio = Number(req.query.from);
  let cantElementos = Number(req.query.cantidad);

  let animales = [];
  let cantIteraciones;

  // Comprobamos las iteraciones de acuerdo al inicio y la cantidad disponble de animales del json.
  if (cantElementos > Object.keys(jsonAnimales).length - inicio)
    cantIteraciones =
      Object.keys(jsonAnimales).length -
      inicio; // Si estoy solicitando mas animales de lo debido, obtengo todos los que haya
  else cantIteraciones = cantElementos; // Sino, obtengo los que se solicitan sin problemas.

  for (let i = 0; i < cantIteraciones; i++) {
    animal = jsonAnimales[inicio + i];
    animales.push(animal);
  }

  res.json(animales);
});
