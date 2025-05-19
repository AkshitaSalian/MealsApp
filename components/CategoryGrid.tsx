import * as React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

interface ICategoryGridProps {
  title: string;
  color: string;
  onPress: () => void;
}

const CategoryGrid: React.FunctionComponent<ICategoryGridProps> = (props) => {
  const { title, color, onPress } = props;
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={{ flex: 1, width: "100%" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    margin: 15,
    height: 150,
    width: 150,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
