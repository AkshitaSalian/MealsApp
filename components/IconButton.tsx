import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IIconButtonProps {
  onPress: () => void;
  color: string;
  icon: string;
}

const IconButton: React.FunctionComponent<IIconButtonProps> = ({
  onPress,
  icon,
  color,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={20} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({ pressed: { opacity: 0.5 } });
