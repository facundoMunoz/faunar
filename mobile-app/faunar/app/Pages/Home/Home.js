import { useState } from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Styles";
import ButtonHome from "../../Components/ButtonHome/ButtonHome";
import { useNavigation } from '@react-navigation/native';

const homeBackgroundImage = require("../../assets/images/homeBackground.jpg");

export default Home = () => {
  const [animalsFocused, setAnimalsFocused] = useState(false);
  const [aboutFocused, setAboutFocused] = useState(false);
  const onPressAnimal = () => {
    setAnimalsFocused(true);
    setAboutFocused(false);
  };
  const onPressAbout = () => {
    setAnimalsFocused(false);
    setAboutFocused(true);
  };
  const navigation = useNavigation();
  navigation.addListener('focus',()=>{
    setAnimalsFocused(false);
    setAboutFocused(false);
  })

  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        source={homeBackgroundImage}
        resizeMode="cover"
        style={styles.imageBackgroundContainer}
      >
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.title}>¡Bienvenido a</Text>
            <Text style={styles.faunarTitle}>FaunAr!</Text>
            <Text style={styles.subtitle}>Descubrí la fauna argentina</Text>
          </View>
          
            <View style={styles.navbarContainer}>
              <ButtonHome
                isFocused={animalsFocused}
                onPress={onPressAnimal}
                label="Animales"
              />
              <ButtonHome
                isFocused={aboutFocused}
                onPress={onPressAbout}
                label="Acerca de"
              />
            </View>
            {animalsFocused && (
              <View style={styles.paragraphContainer}>
                <Text style={styles.paragraph}>
                  Más de 10 fascinantes animales para conocer. Recopilamos
                  información de los animales que habitan nuestro país para que
                  conozcas todas sus características.
                </Text>
              </View>
            )}

            {aboutFocused && (
              <View style={styles.paragraphContainer}>
                <Text style={styles.paragraph}>
                  Esta app forma parte del trabajo final correspondiente a la
                  materia de Laboratorio de Programación para la Licenciatura en
                  Ciencias de la Computación. Su propósito, fuera de la
                  información, es integrar trabajos previos de la materia y
                  poder reflejar conocimientos en React Native y Javascript.
                </Text>
              </View>
            )}
           
            
         
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
