import { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  ActivityIndicator, 
  Image, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../Components/GlobalStyles/GlobalStyles';
import styles from './Styles';
import { getAnimals } from './Services';
import { ANIMALS_IMAGES } from '../../Constants/constants';

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
      console.log('Error al cargar más animales en la flatlist: ' + e.message);
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
      return <ActivityIndicator color='orange' size='large' />;
    }
  };

  const navigation = useNavigation();

  return (
    <View style={[globalStyles.container, {backgroundColor: 'snow', paddingHorizontal: 15,}]}>
      <FlatList
        style={styles.flatListContainer}
        data={animals}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Animal', {
                item,
                img: ANIMALS_IMAGES[item.id] || ANIMALS_IMAGES['default'],
              })
            }
          >
            <View style={styles.cardContainer}>
              <Image
                style={styles.image}
                source={ANIMALS_IMAGES[item.id] || ANIMALS_IMAGES['default']}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
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
}
