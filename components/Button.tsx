import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";

interface IButtonProps {
  title: string;
  onPress: () => void;
  icon?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  title,
  onPress,
  icon,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.root}>
        <Text>{title}</Text>
        {icon && <IconButton icon={icon} color="black" onPress={() => {}} />}
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    flex: 1,
    borderRadius: 8,
    borderColor: "black",
    color: "#34b1eb",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
});
