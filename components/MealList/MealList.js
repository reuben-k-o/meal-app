import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ renderMeals }) {
  function renderMealItem(itemData) {
    // function pressHandler() {
    //   navigation.navigate("MealDetail", {
    //     categId: itemData.item.id,
    //   });
    // }
    const item = itemData.item;

    const mealItemsProps = {
      id: item.id,
      title: item.title,
      imagePath: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      // onPressCustomMeal: pressHandler,
    };

    //spread operator
    return <MealItem {...mealItemsProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={renderMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
