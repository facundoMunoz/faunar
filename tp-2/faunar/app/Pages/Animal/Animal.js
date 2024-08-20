import { View, Text, ImageBackground, Image } from 'react-native';
import Onboarding from '../../Components/Onboarding/Onboarding';
import globalStyles from '../../GlobalStyles/GlobalStyles';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default Animal = ({ route }) => {
  const { item, img } = route.params;
  const { width, height } = Image.resolveAssetSource(img);

  return (
    <View style={[globalStyles.container]}>
      <View style={styles.backgroundImageContainer}>
        <ImageBackground
          source={img}
          style={[styles.backgroundImage, { aspectRatio: width / height }]}
        />
      </View>

      <View style={styles.animalContainer}>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'gray']}
          style={styles.backgroundGradient}
        >
          <View style={styles.animalInfoContainer}>
            <View style={styles.animalHeader}>
              <Text style={styles.animalNameText}>{item.name}</Text>
              <Text style={styles.animalScientificNameText}>
                {item.scientificName}
              </Text>
              {item.extinction && (  
                <View style={{flexDirection: 'row', alignItems: "center"}}>
                <MaterialCommunityIcons name={"alert-outline"} size={25} color={'orange'} style= {{paddingRight: 5}}/>
                <Text style={styles.inExtinctionText}>
                  Especie en peligro de extinción
                </Text>
                </View>
              )}
            </View>

            <Onboarding animalCharacteristics={item} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};
