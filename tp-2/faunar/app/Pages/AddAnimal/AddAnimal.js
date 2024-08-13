import { useState } from 'react';
import {
  ScrollView,
  Keyboard,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../Components/Input/Input';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import styles from './Styles';
import { IP_ADDRESS } from "../../Constants/constants";

export default AddAnimal = () => {
  // Hooks
  const [inputsValues, setInputsValues] = useState({
    name: '',
    scientificName: '',
    description: '',
    weightHeight: '',
    zones: '',
    diet: '',
  });

  const [inputsErrors, setInputsErrors] = useState({});

  const [requestRunning, setRequestRunning] = useState(false);

  const validateForm = () => {
    // Ocultar el teclado al presionar boton "Guardar"
    Keyboard.dismiss();

    let isValid = true;

    // Si es vacío o undefined
    if (!inputsValues.name) {
      handleInputError('Ingrese el nombre del animal', 'name');
      isValid = false;
    }
    if (!inputsValues.scientificName) {
      handleInputError(
        'Ingrese el nombre científico del animal',
        'scientificName'
      );
      isValid = false;
    }
    if (!inputsValues.description) {
      handleInputError(
        'Ingrese una descripción sobre el animal',
        'description'
      );
      isValid = false;
    }
    if (!inputsValues.weightHeight) {
      handleInputError('Ingrese el peso y altura del animal', 'weightHeight');
      isValid = false;
    }
    if (!inputsValues.zones) {
      handleInputError('Ingrese las zonas que habita el animal', 'zones');
      isValid = false;
    }
    if (!inputsValues.diet) {
      handleInputError('Ingrese la dieta del animal', 'diet');
      isValid = false;
    }

    if (isValid) {
      saveAnimal();
    }
  };

  const handleOnChange = (textValue, input) => {
    setInputsValues((prevState) => ({
      ...prevState,
      [input]: textValue,
    }));
  };

  const handleInputError = (errorMessage, input) => {
    setInputsErrors((prevState) => ({
      ...prevState,
      [input]: errorMessage,
    }));
  };

  const saveAnimal = async () => {
    setRequestRunning(true);

    try {
      const newAnimal = {
        id: null,
        name: inputsValues.name,
        scientificName: inputsValues.scientificName,
        description: inputsValues.description,
        weightHeight: inputsValues.weightHeight,
        zones: inputsValues.zones,
        diet: inputsValues.diet,
        //extinction: isInExtintion,
        extinction: true,
      };

      const url = `http://${IP_ADDRESS}/api/agregarAnimal`;
        
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnimal),
      });
      
      if (response.ok) {
        Alert.alert('La operación se realizó correctamente.');
      }
      } catch (error) {
        Alert.alert('Error', 'Servidor no disponible en este momento, vuelva a intentar más tarde.');
      }
      finally {
        setRequestRunning(false);
        
        // Resetear valores de hooks state
        setInputsValues({
          name: '',
          scientificName: '',
          description: '',
          weightHeight: '',
          zones: '',
          diet: '',
        });
      }
  };
  
  if (requestRunning)
    return (
      <View style={styles.uploadingContainer}>
        <ActivityIndicator color='orange' size='large' />
      </View>
    );
  
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.formContainer}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
        }}
      >
        <Input
          leftIconName='paw'
          placeholder='Nombre'
          onChangeText={(textValue) => {
            handleOnChange(textValue, 'name');
          }}
          error={inputsErrors.name}
          onFocus={() => {
            handleInputError(null, 'name');
          }}
        />

        <Input
          leftIconName='flask'
          placeholder='Nombre científico'
          onChangeText={(text) => handleOnChange(text, 'scientificName')}
          error={inputsErrors.scientificName}
          onFocus={() => {
            handleInputError(null, 'scientificName');
          }}
        />

        <Input
          leftIconName='comment'
          placeholder='Descripción'
          numLines={7}
          onChangeText={(text) => handleOnChange(text, 'description')}
          error={inputsErrors.description}
          onFocus={() => {
            handleInputError(null, 'description');
          }}
        />

        <Input
          leftIconName='dumbbell'
          placeholder='Peso / Altura'
          numLines={7}
          onChangeText={(text) => handleOnChange(text, 'weightHeight')}
          error={inputsErrors.weightHeight}
          onFocus={() => {
            handleInputError(null, 'weightHeight');
          }}
        />

        <Input
          leftIconName='map-marker'
          placeholder='Zonas'
          numLines={7}
          onChangeText={(text) => handleOnChange(text, 'zones')}
          error={inputsErrors.zones}
          onFocus={() => {
            handleInputError(null, 'zones');
          }}
        />

        <Input
          leftIconName='food-drumstick'
          placeholder='Dieta'
          numLines={7}
          onChangeText={(text) => handleOnChange(text, 'diet')}
          error={inputsErrors.diet}
          onFocus={() => {
            handleInputError(null, 'diet');
          }}
        />

        <PrimaryButton title={'Guardar'} onPress={validateForm} />
      </ScrollView>
    </SafeAreaView>
  );
}
