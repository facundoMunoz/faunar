import { View } from 'react-native';
import styles from './Styles';
import Input from '../../Components/Input/Input';

export default AddAnimal = () => {
  return (
    <View style={styles.formContainer}>
      <Input
        leftIconName="paw"
        placeholder="Nombre"
      />
      <Input
        leftIconName="flask"
        placeholder="Nombre científico"
      />
    </View>
  );
}
