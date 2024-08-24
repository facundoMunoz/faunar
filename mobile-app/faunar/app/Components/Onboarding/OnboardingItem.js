import { View, Text, useWindowDimensions } from "react-native";
import styles from "./Styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default OnboardingItem = (items) => {
  const { item } = items;
  const characteristic = item[Object.keys(item)[0]];
  const { width } = useWindowDimensions();
  let iconName;
  switch (item.title) {
    case "Descripción":
      iconName = "comment";
      break;
    case "Peso / Altura":
      iconName = "dumbbell";
      break;
    case "Zonas":
      iconName = "map-marker";
      break;
    case "Dieta":
      iconName = "food-drumstick";
      break;
  }

  return (
    <View style={[styles.container, { width }]}>
      <View style={{flexDirection: 'row', alignItems: "center"}}>
        <MaterialCommunityIcons name={iconName} size={25} color={"orange"} style= {{paddingRight: 5}} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Text style={styles.text}>{characteristic}</Text>
    </View>
  );
};
