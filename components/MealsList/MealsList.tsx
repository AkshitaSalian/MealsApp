import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { IMeals } from "../../types/interfaces";
import { MEALS } from "../../data/dummy-data";

interface IMealsListProps {
  mealsList: IMeals[];
}

const MealsList: React.FunctionComponent<IMealsListProps> = ({ mealsList }) => {
  const renderMealItem = ({ item }: { item: IMeals }) => {
    return <MealItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={mealsList}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {},
});
