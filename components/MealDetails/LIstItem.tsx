import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IListItemProps {
  value: string;
}

const ListItem: React.FunctionComponent<IListItemProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text key={value}>{value}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});
