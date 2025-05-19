import * as React from "react";
import { View } from "react-native";
import PlaceForm from "../../components/places/PlaceForm";

interface IAddPlaceProps {}

const AddPlace: React.FunctionComponent<IAddPlaceProps> = (props) => {
  return (
    <View>
      <PlaceForm />
    </View>
  );
};

export default AddPlace;
