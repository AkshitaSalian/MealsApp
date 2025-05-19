import * as React from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface IInputProps {
  label: string;
  textConfig?: any;
  value: string;
  onChange: (text: string) => void;
}

const Input: React.FunctionComponent<IInputProps> = (props) => {
  const { label, textConfig, value, onChange } = props;
  const isMultiLine = textConfig?.multiline;
  const inputStyles = isMultiLine
    ? [styles.textInput, styles.textMultiLine]
    : [styles.textInput];
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={inputStyles}
        {...textConfig}
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 5,
    width: "100%",
    marginVertical: 10,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  textInput: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  textMultiLine: {
    height: 100,
    textAlignVertical: "top",
  },
});
