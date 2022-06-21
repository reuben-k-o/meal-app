import { View, Text } from "react-native";

function MealDetailScreen({ route }) {
  const catishId = route.params.categId;

  return (
    <View>
      <Text>{catishId} Yay!! hahaha</Text>
    </View>
  );
}

export default MealDetailScreen;
