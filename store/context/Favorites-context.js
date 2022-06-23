import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removerFavorite: (id) => {},
});

function FavoriteContexProvider({ children }) {
  const [favMealIds, setFavMealsIds] = useState([]);

  function addFavorite(id) {
    setFavMealsIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavMealsIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
