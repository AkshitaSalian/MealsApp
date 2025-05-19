import * as React from "react";
import { StyleSheet, View } from "react-native";
import Input from "../Input";
import { ScrollView } from "react-native-gesture-handler";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

interface IPlaceFormProps {}

const PlaceForm: React.FunctionComponent<IPlaceFormProps> = (props) => {
  const [inputs, setInputs] = React.useState({
    title: "",
  });

  const handleInputChange = (inputIdentifier: string, inputValue: string) => {
    setInputs((prevState) => ({
      ...prevState,
      [inputIdentifier]: inputValue,
    }));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          label="Title"
          textConfig={{}}
          value={inputs.title}
          onChange={(val) => handleInputChange("title", val)}
        />
        <ImagePicker />
        <LocationPicker />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
