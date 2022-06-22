import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "./MealDetails";

function MealItem({
  id,
  title,
  imagePath,
  duration,
  complexity,
  affordability,
  //   onPressCustomMeal,
}) {
  const navigation = useNavigation();

  function pressMealDetailHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      {/* <Pressable android_ripple={{ color: "#ccc" }} onPress={onPressCustomMeal}> */}
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={pressMealDetailHandler}
      >
        <View>
          <Image source={{ uri: imagePath }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 6,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
});
