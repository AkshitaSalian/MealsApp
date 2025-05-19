import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IMealBasicInfoProps {
  duration: number;
  affordability: string;
  complexity: string;
}

const MealBasicInfo: React.FunctionComponent<IMealBasicInfoProps> = ({
  duration,
  affordability,
  complexity,
}) => {
  return (
    <View style={styles.details}>
      <Text> {duration}m</Text>
      <Text> | </Text>
      <Text> {affordability}</Text> <Text> | </Text>
      <Text> {complexity}</Text>
    </View>
  );
};

export default MealBasicInfo;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
