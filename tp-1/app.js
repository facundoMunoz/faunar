/* --- Configuración del Servidor --- */

//trae la libreria "express" para hacer un servidor web
const express = require("express");
const path = require("path");
const fs = require("fs"); //para obtener json y parsear

//instancia
const app = express();
const port = 3000;

//abre el servidor
app.listen(port, () => {
    console.log("Server running on port ", port);
});

//hace publico el folder de la pagina
app.use(express.static('public'));

app.use(express.json());
app.set('json spaces', 2);

// Root incial, retorna el index
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/informacion", (req, res) => {
  const contenido = obtenerJson();
  console.log(contenido);
  res.json(contenido);
});


/* --- Endpoint POST ANIMAL api/animales --- */

app.post("/api/animales", (req, res) => {
  const newAnimal = req.body;
  const animales = obtenerJson();

  const lastAnimal = Object.keys(animales).length + 1;
  animales[lastAnimal] = newAnimal;

  console.log(animales);
  
  fs.writeFile("storage/infoAnimales.json", JSON.stringify(animales), (err) => {
    if (err) 
      console.log(err);
    else
      console.log("Nueva informacion añadida.");
  });

  res.status(201).send();
  //res.json(animales);
});



/* --- Endpoint GET ANIMAL api/animales/id --- */

// Obtiene el html del animal segun su id
app.get("/api/animales/:id", (req, res) => {
  const json = obtenerJson();
  animalsAmount = Object.keys(json).length;
  
  // Comprobamos no exceder la cantidad de animales existentes en el json, de lo contrario devuelve 404.
  if (req.params.id <= animalsAmount) 
    res.sendFile(path.join(__dirname + "/public/assets/html/animal.html"));
  else
    //res.status(404).send("404 Not Found: Animal no existe."); 
    res.status(404).send(); // Hay 2 opciones, retornar el mensaje del navegador, o la de arriba que es el msj propio.
});

app.get("/api/animal/:id", (req, res) => {
  const json = obtenerJson();
  animalsAmount = Object.keys(json).length;
  
  // Comprobamos no exceder la cantidad de animales existentes en el json, de lo contrario devuelve 404.
  if (req.params.id <= animalsAmount) 
    res.json(json[req.params.id]);
  else
    //res.status(404).send("404 Not Found: Animal no existe."); 
    res.status(404).send(); // Hay 2 opciones, retornar el mensaje del navegador, o la de arriba que es el msj propio.
});

// Obtiene el css requerido
app.get("/api/css/:name", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/assets/css/"+req.params.name));
});

// Devuelve el js requerido
app.get("/api/js/:name", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/assets/js/"+req.params.name));
});

// Obtiene el background requerido
app.get("/api/media/backgrounds/:name", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/assets/media/backgrounds/"+req.params.name));
});

// Obtiene la img del animal requerido
app.get("/api/media/animals/:id", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/assets/media/animals/"+req.params.id));
});

// Obtiene el json requerido
app.get("/api/storage/:name", (req, res) => {
  res.sendFile(path.join(__dirname + "/storage/"+req.params.name));
});

//devuelve json con infoAnimales, storage es privado nadie puede ver eso afuera del sv sin poner el path completo
function obtenerJson() {
  try {
    const jsonString = fs.readFileSync("storage/infoAnimales.json", "utf8");
    const animals = JSON.parse(jsonString);
    return animals;
  } 
  catch (err) {
    console.log("Error reading or parsing JSON file:", err);
    return null; // Puedes manejar errores de otra manera si lo deseas
  }
}


/* --- Endpoint GET ANIMALES api/animales?cantidad=n&from=m --- */

app.get("/api/animales", (req, res) => {
  const json = obtenerJson();
  animalsAmount = Object.keys(json).length;
  
  //console.log(req.query.cantidad);
  //console.log(req.query.from);
  
  let inicio = Number(req.query.from);
  let cantElementos = Number(req.query.cantidad);

  let animales = [];
  let cantIteraciones;

  // Comprobamos las iteraciones de acuerdo al inicio y la cantidad disponble de animales del json. 
  if (cantElementos > (animalsAmount - inicio)) 
    cantIteraciones = (animalsAmount - inicio); // Si estoy solicitando mas animales de lo debido, obtengo todos los que haya
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