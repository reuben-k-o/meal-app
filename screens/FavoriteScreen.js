import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import MealsList from "../components/MealList/MealList";
import { FavoriteContext } from "../store/context/Favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen() {
  const favoriteMealCtx = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You don't have any favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList renderMeals={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
