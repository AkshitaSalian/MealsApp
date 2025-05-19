import * as React from "react";
import { Text, View } from "react-native";
import { FavouritesContext } from "../store/context/favourites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

interface IFavouritesProps {}

const Favourites: React.FunctionComponent<IFavouritesProps> = (props) => {
  const context = React.useContext(FavouritesContext);
  const { ids } = context;

  const mealsList = MEALS.filter((meal) => {
    return ids.includes(meal.id);
  });

  if (mealsList.length === 0) {
    return (
      <View>
        <Text>No Favourites found!</Text>
      </View>
    );
  }

  return <MealsList mealsList={mealsList} />;
};

export default Favourites;
