import * as React from "react";
import { StyleSheet, Text } from "react-native";

interface ISubTtitleProps {
  label: string;
}

const SubTtitle: React.FunctionComponent<ISubTtitleProps> = ({ label }) => {
  return <Text style={styles.title2}>{label}</Text>;
};

export default SubTtitle;

const styles = StyleSheet.create({
  title2: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
