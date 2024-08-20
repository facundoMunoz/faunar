// Para que desde expo go haga el fetch, reemplazar por la ip propia del host server
const IP = "192.168.1.40";
const PORT = "3000";
export const IP_ADDRESS = `${IP}:${PORT}`;

export const ANIMALS_IMAGES = {
    default: require("../assets/images/default.png"),
    1: require("../assets/images/1.webp"),
    2: require("../assets/images/2.webp"),
    3: require("../assets/images/3.webp"),
    4: require("../assets/images/4.webp"),
    5: require("../assets/images/5.webp"),
    6: require("../assets/images/6.webp"),
    7: require("../assets/images/7.webp"),
  };

export const ANIMALS_IMAGES_LENGHT = Object.keys(ANIMALS_IMAGES).length - 1;