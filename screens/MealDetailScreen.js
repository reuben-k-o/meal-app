import { useContext } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { FavoriteContext } from "../store/context/Favorites-context";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const FavoriteMealCtx = useContext(FavoriteContext);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText} //cascading styles from mealDetail component
      />
      <View style={styles.outerContainer}>
        <View style={styles.listContainer}>
          <Subtitle> Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 10,
  },
  image: {
    height: 350,
    width: "100%",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  outerContainer: {},
  listContainer: {},
});
