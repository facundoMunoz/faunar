
const fs = require("fs"); // Para obtener json y parsear
const promesa = fs.promises;

/**
 * 
 * @returns Archivo JSON con animales.
 */
async function obtenerAnimales() {
    try {
        const jsonString = await promesa.readFile("storage/animales.json", "utf8");
        const animales = JSON.parse(jsonString);
        return animales;
    } catch (err) {
        console.error("Error leyendo o parseando archivo JSON", err);
        throw err;
    }
}
  //sin la siguiente linea, no podria hacer visible la funcion anterior.

  module.exports = { obtenerAnimales };
