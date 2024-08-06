import { ScrollView } from 'react-native';
import styles from './Styles';
import Input from '../../Components/Input/Input';

export default AddAnimal = () => {
  return (
    <ScrollView
      style={styles.formContainer}
      contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
    >
      <Input
        leftIconName="paw"
        placeholder="Nombre"
      />
      <Input
        leftIconName="flask"
        placeholder="Nombre científico"
      />
      <Input
        leftIconName="comment"
        placeholder="Descripción"
        numLines={7}
      />
      <Input
        leftIconName="dumbbell"
        placeholder="Peso / Altura"
        numLines={7}
      />
      <Input
        leftIconName="map-marker"
        placeholder="Zonas"
        numLines={7}
      />
      <Input
        leftIconName="food-drumstick"
        placeholder="Dieta"
        numLines={7}
      />
    </ScrollView>
  );
}
