// Para que desde expo go haga el fetch, reemplazar por la ip propia del host server
const IP = '192.168.1.40';
const PORT = '3000';
export const IP_ADDRESS = `${IP}:${PORT}`;

export const ANIMALS_IMAGES = {
  default: {
    cardImg: require('../assets/images/default.png'),
    detailsImg: require('../assets/images/default.png'),
  },

  1: {
    cardImg: require('../assets/images/1.webp'),
    detailsImg: require('../assets/images/1.webp'),
  },
  2: {
    cardImg: require('../assets/images/2.webp'),
    detailsImg: require('../assets/images/2.webp'),
  },
  3: {
    cardImg: require('../assets/images/3.webp'),
    detailsImg: require('../assets/images/details/3.png'),
  },
  4: {
    cardImg: require('../assets/images/4.webp'),
    detailsImg: require('../assets/images/4.webp'),
  },
  5: {
    cardImg: require('../assets/images/5.webp'),
    detailsImg: require('../assets/images/details/5.png'),
  },
  6: {
    cardImg: require('../assets/images/6.webp'),
    detailsImg: require('../assets/images/details/6.png'),
  },
  7: {
    cardImg: require('../assets/images/7.webp'),
    detailsImg: require('../assets/images/details/7.png'),
  },
  8: {
    cardImg: require('../assets/images/8.webp'),
    detailsImg: require('../assets/images/details/8.png'),
  },

  9: {
    cardImg: require('../assets/images/9.webp'),
    detailsImg: require('../assets/images/details/9.png'),
  },
  10: {
    cardImg: require('../assets/images/10.webp'),
    detailsImg: require('../assets/images/details/10.png'),
  },
  11: {
    cardImg: require('../assets/images/11.webp'),
    detailsImg: require('../assets/images/details/11.png'),
  },
  12: {
    cardImg: require('../assets/images/12.webp'),
    detailsImg: require('../assets/images/details/12.png'),
  },
};

export const ANIMALS_IMAGES_LENGHT = Object.keys(ANIMALS_IMAGES).length - 1;
