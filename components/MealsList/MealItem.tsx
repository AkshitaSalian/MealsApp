import * as React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IMeals } from "../../types/interfaces";
import { useNavigation } from "@react-navigation/native";
import MealBasicInfo from "../MealBasicInfo";

interface IMealItemProps {
  item: IMeals;
}

const MealItem: React.FunctionComponent<IMealItemProps> = ({ item }) => {
  const { title, imageUrl, duration, affordability, complexity } = item;

  const navigation = useNavigation();

  const goToMealsDetails = () => {
    navigation.navigate("MealsDetails", { id: item.id });
    navigation.setOptions({
      title: title,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={() => goToMealsDetails()}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealBasicInfo
          affordability={affordability}
          complexity={complexity}
          duration={duration}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
