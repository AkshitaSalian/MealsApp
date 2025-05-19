import * as React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealBasicInfo from "../components/MealBasicInfo";
import SubTtitle from "../components/MealDetails/SubTitle";
import ListItem from "../components/MealDetails/LIstItem";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";

interface IMealsDetailsProps {
  route: any;
  navigation: any;
}

const MealsDetails: React.FunctionComponent<IMealsDetailsProps> = (props) => {
  const { route, navigation } = props;
  const mealId = route.params.id;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const favsContext = React.useContext(FavouritesContext);
  const { isFavourite, addFavourite, removeFavourite } = favsContext;

  const isMealFavourite = isFavourite(mealId);

  React.useLayoutEffect(() => {
    const mealTitle = meal?.title;

    if (mealTitle) {
      console.log("isMealFavourite", isMealFavourite);
      navigation.setOptions({
        headerRight: () => {
          return (
            <IconButton
              onPress={handlleFavoritePress}
              icon={isMealFavourite ? "star" : "star-outline"}
              color="black"
            />
          );
        },
      });
    }
  }, [meal, navigation, isMealFavourite]);

  const handlleFavoritePress = () => {
    if (isMealFavourite) {
      removeFavourite(mealId);
    } else {
      addFavourite(mealId);
    }
  };

  if (!meal) {
    return (
      <View>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal?.title}</Text>
      <MealBasicInfo
        affordability={meal.affordability}
        complexity={meal.complexity}
        duration={meal.duration}
      />

      <SubTtitle label="Ingredients" />
      {meal?.ingredients?.map((ingredient: string) => (
        <ListItem value={ingredient} />
      ))}
      <SubTtitle label="Steps" />
      {meal?.steps?.map((step: string) => (
        <ListItem value={step} />
      ))}
    </ScrollView>
  );
};

export default MealsDetails;

const styles = StyleSheet.create({
  container: { margin: 20, paddingLeft: 10 },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  title2: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
