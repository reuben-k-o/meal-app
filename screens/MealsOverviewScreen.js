import { View, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { CATEGORIES } from "../data/dummy-data";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  // route params to fetch data from the navigate object
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealDetail", {
        categId: itemData.item.id,
      });
    }
    const item = itemData.item;

    const mealItemsProps = {
      title: item.title,
      imagePath: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onPressCustomMeal: pressHandler,
    };

    //spread operator
    return <MealItem {...mealItemsProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
