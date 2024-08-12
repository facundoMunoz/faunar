import { IP, PORT } from "../../Constants/constants";

const IP_ADDRESS = `${IP}:${PORT}`;

export const getAnimals = async (page, limit) => {
  try {
    const url = `http://${IP_ADDRESS}/api/animales?page=${page}&limit=${limit}`;
    const response = await fetch(url);
    if (response.ok) {
      const animalsList = await response.json();
      return animalsList;
    } else {
      return response.status(500);
    }
  } catch (e) {
    return console.error("Error:", e);
  }
};