import { Text, View, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
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
