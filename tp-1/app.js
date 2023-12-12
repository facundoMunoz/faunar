/* --- Configuración del Servidor --- */

// Trae la libreria "express" para hacer un servidor web
const express = require("express");
const path = require("path");
const fs = require("fs"); // Para obtener json y parsear
const servicios = require('./servicios');
const promesa = fs.promises;

// Instancia
const app = express();
const port = 3000;

// Abre el servidor
app.listen(port, () => {
  console.log("Server running on port ", port);
});

// Hace publico el folder de la pagina
app.use(express.static('public'));

// Para mostrar formateado un json en navegador
app.use(express.json());
app.set('json spaces', 2);

/* --- Endpoint POST ANIMAL api/animales (unica post)--- */
app.post("/api/agregarAnimal", async (req, res) => {
  const nuevoAnimal = req.body;
  try {
      // Obtén el JSON de manera asíncrona
      const jsonAnimales = await servicios.obtenerAnimales();

      jsonAnimales.push(nuevoAnimal);

      // Modifica el JSON original de manera asíncrona
      await promesa.writeFile("storage/animales.json", JSON.stringify(jsonAnimales, null, 2), 'utf8');

      console.log("Nuevo archivo json con la información añadida.");
      res.json(jsonAnimales);
      res.status(201).send();
  } catch (err) {
      console.error('Error al agregar nuevo animal:', err);
      res.status(500).json({ error: 'Error al agregar nuevo animal.' });
  }
});

/** --- Endpoint PUT modifica animal (unicu put) --- */
app.put("/api/modificarAnimal/:id", async (req, res) => {
  const animalId = req.params.id;
  const infoNueva = req.body;

  try {
      // Obtiene el animal de manera asíncrona
      const animalExistente = await servicios.obtenerAnimales();

      if (animalExistente) {
          // Fusiona el animal existente con la información nueva
          const animalModificado = { ...animalExistente, ...infoNueva };

          // Modifica el animal en el archivo JSON de manera asíncrona
          await promesa.writeFile("storage/animales.json", JSON.stringify(animalModificado, null, 2), 'utf8');

          res.status(200).send("Animal modificado exitosamente.");
      } else {
          res.status(404).send("404 Not Found: Animal solicitado no existe.");
      }
  } catch (err) {
      console.error('Error al modificar el animal:', err);
      res.status(500).send("Error al modificar el animal.");
  }
});

/* --- Endpoints GETS --- */

// DEVUELVE JSON CON UN UNICO ANIMAL SOLICITADO SEGUN :id
app.get("/api/animal/:id", async (req, res) => {
  const jsonAnimales = await servicios.obtenerAnimales();
  // Comprobamos no exceder la cantidad de animales existentes en el json, de lo contrario devuelve 404.
  if (req.params.id <= Object.keys(jsonAnimales).length)
    res.json(jsonAnimales[req.params.id]);
  else
    res.status(404).send("404 Not Found: Animal solicitado no existe.");
});


app.get("/api/cantidadAnimales/", async (req, res) => {
  const jsonAnimales = await servicios.obtenerAnimales();
  res.json({ amount: Object.keys(jsonAnimales).length });
});


/* --- Endpoint GET ANIMALES QUERY solicitada api/animales?cantidad=n&from=m --- */

app.get("/api/devolverNAnimales", (req, res) => {

  let inicio = Number(req.query.from);
  let cantElementos = Number(req.query.cantidad);

  let animales = [];
  let cantIteraciones;

  // Comprobamos las iteraciones de acuerdo al inicio y la cantidad disponble de animales del json. 
  if (cantElementos > (Object.keys(json).length - inicio))
    cantIteraciones = (Object.keys(json).length - inicio); // Si estoy solicitando mas animales de lo debido, obtengo todos los que haya
  else
    cantIteraciones = cantElementos; // Sino, obtengo los que se solicitan sin problemas.

  for (let i = 1; i <= cantIteraciones; i++) {
    animal = {
      nombreAnimal: json[inicio + i].nombreAnimal,
      descripcion: json[inicio + i].descripcion,
      zonas: json[inicio + i].zonas,
      pesoTamanio: json[inicio + i].pesoTamanio,
      dieta: json[inicio + i].dieta
    };
    animales.push(animal);
  }
  res.json(animales);
});
