import * as React from "react";
import { View } from "react-native";
import PlaceList from "../../components/places/PlaceList";

interface IAllPlacesProps {}

const AllPlaces: React.FunctionComponent<IAllPlacesProps> = (props) => {
  return <PlaceList places={[]} />;
};

export default AllPlaces;
