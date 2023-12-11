/* --- Configuración del Servidor --- */

// Trae la libreria "express" para hacer un servidor web
const express = require("express");
const path = require("path");
const fs = require("fs"); // Para obtener json y parsear

// Instancia
const app = express();
const port = 3000;

// Variables globales para reutilizacion
let json;

// Abre el servidor
app.listen(port, () => {
  console.log("Server running on port ", port);
  json = obtenerJson();
});

// Hace publico el folder de la pagina
app.use(express.static('public'));

// Para mostrar formateado un json en navegador
app.use(express.json());
app.set('json spaces', 2);

/* --- Endpoint POST ANIMAL api/animales (unica post)--- */
app.post("/api/animales", (req, res) => {
  const newAnimal = req.body;
  const animales = json;

  const ultimoAnimal = Object.keys(json).length + 1;
  animales[ultimoAnimal] = newAnimal;

  fs.writeFile("storage/animales.json", JSON.stringify(animales), (err) => {
    if (err)
      console.log(err);
    else
      console.log("Nuevo archivo json con la informacion añadida.");
    json = animales;
    console.log(json);
  });

  res.status(201).send();
  //res.json(animales);
});

/** --- Endpoint PUT modifica animal (unicu put) --- */
app.put("/api/animales/:id", (req, res) => {
  const animalId = req.params.id;
  const infoNueva = req.body;

  console.log(json);

  if (animalId > 0 && animalId <= Object.keys(json).length) {
    json[animalId] = infoNueva;
    fs.writeFile("storage/animales.json", JSON.stringify(json), (err) => {
      if (err)
        console.log(err);
      else {
        res.status(200).send("Animal modificado exitosamente.");
        console.log(json);
      }

    });

  } else {
    res.status(404).send("404 Not Found: Animal solicitado no existe.");
  }
});


/* --- Endpoints GETS --- */

// DEVUELVE JSON CON UN UNICO ANIMAL SOLICITADO SEGUN :id
app.get("/api/animal/:id", (req, res) => {
  // Comprobamos no exceder la cantidad de animales existentes en el json, de lo contrario devuelve 404.
  if (req.params.id <= Object.keys(json).length)
    res.json(json[req.params.id]);
  else
    res.status(404).send("404 Not Found: Animal solicitado no existe.");
});

function obtenerJson() {
  try {
    const jsonString = fs.readFileSync("storage/animales.json", "utf8");
    const animals = JSON.parse(jsonString);
    return animals;
  }
  catch (err) {
    console.log("Error reading or parsing JSON file:", err);
    throw err;
  }
}

app.get("/api/animals/amount", (req, res) => {
  res.json({ amount: Object.keys(json).length });
});


/* --- Endpoint GET ANIMALES QUERY solicitada api/animales?cantidad=n&from=m --- */

app.get("/api/animales", (req, res) => {

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
