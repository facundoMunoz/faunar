import { useState, useRef } from 'react';
import { FlatList, View, Animated, Dimensions } from 'react-native';
import OnboardingItem from './OnboardingItem';
import globalStyles from '../GlobalStyles/GlobalStyles';

export default Onboarding = (item) => {
  const { animalCharacteristics } = item;

  // Filtramos los primeros tres campos de la informacion
  const { id, name, scientificName, extinction, ...otherCharacteristics } =
    animalCharacteristics;

  /*  Convertimos cada campo en key para poder pasarlo a la flatlist, y agregamos el campo title para mostrar
      en el componente OnboardingItem que renderiza dicha caracteristica del animal.
      Obtendríamos el siguiente resultado: 
      [ { description: unaDescripcion, title: Descripción }, { weightHeight: unPesoAltura, title: Peso / Altura }, ... ]
  */
  const filteredCharacteristics = Object.keys(otherCharacteristics).map(
    (key) => ({
      [key]: otherCharacteristics[key],
      title:
        key === 'description'
          ? 'Descripción'
          : key === 'weightHeight'
          ? 'Peso / Altura'
          : key === 'zones'
          ? 'Zonas'
          : key === 'diet'
          ? 'Dieta'
          : key === 'extinction'
          ? 'Especie en peligro de extinción'
          : null,
    })
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={filteredCharacteristics}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={flatListRef}
        snapToAlignment='start'
        snapToInterval={Dimensions.get('window').width}
      />
    </View>
  );
};
