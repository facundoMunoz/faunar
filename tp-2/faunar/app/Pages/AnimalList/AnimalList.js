import { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Card from '../../Components/Card/Card';
import globalStyles from '../../Components/GlobalStyles/GlobalStyles';
import styles from './Styles';
import { getAnimals } from './Services';
import { ANIMALS_IMAGES } from '../../Constants/constants';

export default AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [requestRunning, setRequestRunning] = useState(false);
  const [page, setPage] = useState(1);
  const nextPage = useRef();
  const [refreshing, setRefreshing] = useState(false);

  const limit = 4;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setAnimals([]);
      getAnimalsData();
      setRefreshing(false);
    }, 2000);
  }, []);

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

  return (
    <View style={[globalStyles.container, { backgroundColor: '#F5F5DC' }]}>
      <FlatList
        style={[styles.flatListContainer]}
        data={animals}
        renderItem={({ item }) => (
          <Card
            item={item}
            img={ANIMALS_IMAGES[item.id] || ANIMALS_IMAGES['default']}
          />
        )}
        ListFooterComponent={renderMoreAnimalsLoader}
        onEndReachedThreshold={0.6}
        onEndReached={fetchNextAnimalPage}
        bounces={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['orange']}
          />
        }
      />
    </View>
  );
};
