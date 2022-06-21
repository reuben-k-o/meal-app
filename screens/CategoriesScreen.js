import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

//Components bound to a screen get a special prop provided by navigation i.e {navigation}

function CategoriesScreen({ navigation }) {
  //utilizes arguement passed by the parent function, else bind method could have been used.
  function renderCategoryItem(itemData) {
    //itemData prop is provided by FlatList
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
      //pass data as the second parameter i.e options object {}
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPressCustom={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
