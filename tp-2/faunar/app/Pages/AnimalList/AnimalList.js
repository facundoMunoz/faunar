import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../../Components/GlobalStyles/GlobalStyles";
import styles from "./Styles";
import { getAnimals } from "./Services";
import { ANIMALS_IMAGES } from "../../Constants/constants";

export default AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [requestRunning, setRequestRunning] = useState(false);
  const [page, setPage] = useState(1);
  const nextPage = useRef();

  const limit = 4;

  // Simula la espera de request de más animales
  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  const getAnimalsData = async () => {
    try {
      setRequestRunning(true);
      const moreAnimals = await getAnimals(page, limit);

      // Simula la espera de request de más animales
      await sleep(1000);

      setAnimals([...animals, ...moreAnimals.results]);

      if (moreAnimals.next) {
        nextPage.current = moreAnimals.next.page;
      } else {
        nextPage.current = null;
      }
    } catch (e) {
      console.log("Error al cargar más animales en la flatlist: " + e.message);
    }
    setRequestRunning(false);
  };

  useEffect(() => {
    getAnimalsData();
  }, [page]);

  const fetchNextAnimalPage = () => {
    if (nextPage.current) {
      setPage(nextPage.current);
    }
  };

  const renderMoreAnimalsLoader = () => {
    if (requestRunning) {
      return <ActivityIndicator color="orange" size="large" />;
    }
  };

  const navigation = useNavigation();

  return (
    <View
      style={[
        globalStyles.container,
        { backgroundColor: "#F5F5DC"},
      ]}
    >
      <FlatList
        style={[styles.flatListContainer, {left: 30, marginTop:40}]}
        data={animals}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Animal", {
                item,
                img: ANIMALS_IMAGES[item.id] || ANIMALS_IMAGES["default"],
              })
            }
          >
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  source={ANIMALS_IMAGES[item.id] || ANIMALS_IMAGES["default"]}
                  style={styles.image}
                />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.scientificName}>{item.scientificName}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        refreshing={true}
        ListFooterComponent={renderMoreAnimalsLoader}
        onEndReachedThreshold={0.6}
        onEndReached={fetchNextAnimalPage}
      />
    </View>
  );
};
