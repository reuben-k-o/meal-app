import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({
  title,
  imagePath,
  duration,
  complexity,
  affordability,
  onPressCustomMeal,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={onPressCustomMeal}>
        <View>
          <Image source={{ uri: imagePath }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
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
  details: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
