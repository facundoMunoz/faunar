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
    8: require("../assets/images/8.webp"),
    9: require("../assets/images/9.webp"),
    10: require("../assets/images/10.webp"),
    11: require("../assets/images/11.webp"),
    12: require("../assets/images/12.webp"),
  };

export const ANIMALS_IMAGES_LENGHT = Object.keys(ANIMALS_IMAGES).length - 1;