import * as React from "react";
import { StyleSheet, View } from "react-native";
import Input from "../components/Input";

interface IFeedBackProps {}

const FeedBack: React.FunctionComponent<IFeedBackProps> = (props) => {
  return (
    <View style={styles.container}>
      <Input
        label="Date"
        textConfig={{ placeholder: "YYYY-MM-DD", maxLength: 10 }}
      />
      <Input
        label="Description"
        textConfig={{ multiline: true, autoCapitalize: "sentence" }}
      />
      <Input label="Email" />
    </View>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
