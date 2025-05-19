import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { IMeals } from "../types/interfaces";
import MealsList from "../components/MealsList/MealsList";

interface IMealsOverViewProps {
  route: {
    params: {
      categoryId: string;
    };
  };
  navigation: any;
}

const MealsOverView: React.FunctionComponent<IMealsOverViewProps> = ({
  route,
  navigation,
}) => {
  const categoryId = route.params.categoryId;

  const currentMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  React.useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (cat) => cat.id === categoryId
    )?.title;
    if (categoryTitle)
      navigation.setOptions({
        title: categoryTitle,
      });
  }, [categoryId, navigation]);

  return <MealsList mealsList={currentMeals} />;
};

export default MealsOverView;
