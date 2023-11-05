//trae la libreria "express" para hacer un servidor web
/**
 * 0. agregar boton lupita o + para ver una imagen full del animal para cada animal o bien hacer un fondo para cada animal o agrandar la imagen de animal.
 * 1. todas las request que no esten definidas, les enviamos un 404??
 * 2. que tipo de post podemos implementar? deberiamos permitir carga de nuevo animal?\
 * - actualizaria json, nueva imagen. ver
 * 3. como seria validar datos para un get? por ejemplo escribir /api/informacion
 * 4. que es una coleccion postman?
 * 5. que otros get deberiamos implementar o que no deberian tener  los html? que acceden a los js, que hacer con las imagenes que son obtenidas por un id?
 */
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

//recursos se carga en cdn(hosteado) o proyecto

//prueba para que node devuelva algo, preguntar si tiene que llamarse api???
//esta direccion es utilizada en animal.js y main.js.
app.get("/informacion", (req,res) => {
    const contenido = obtenerJson();
    console.log(contenido);
    res.json(contenido);
});

//faltaria post, preguntar..

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

//devuelve json con info animales, storage es privado nadie puede ver eso afuera del sv sin poner el path completo
function obtenerJson() {
    try {
      const jsonString = fs.readFileSync("storage/infoAnimales.json", "utf8");
      const animals = JSON.parse(jsonString);
      return animals;
    } catch (err) {
      console.log("Error reading or parsing JSON file:", err);
      return null; // Puedes manejar errores de otra manera si lo deseas
    }
  }
  
  // Llama a la función para obtener el JSON de manera síncrona
  const json = obtenerJson();
  if (json) {
    console.log(json);
  };

/**
 * Puedo reemplazar => por esto, por convencion en express funciona asi
 * var saludar = function () {
    console.log("Hola");
};
 */
