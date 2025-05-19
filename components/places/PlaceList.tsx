import * as React from "react";
import { FlatList } from "react-native";
import { IPlace } from "../../types/interfaces";
import PlaceItem from "./PlaceItem";

interface IPlaceListProps {
  places: IPlace[];
}

const PlaceList: React.FunctionComponent<IPlaceListProps> = ({ places }) => {
  const handleSelect = (id: string) => {
    console.log("Selected place ID:", id);
  };
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={handleSelect} />
      )}
    />
  );
};

export default PlaceList;
