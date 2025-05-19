import * as React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { IPlace } from "../../types/interfaces";

interface IPlaceItemProps {
  place: IPlace;
  onSelect: (id: string) => void;
}

const PlaceItem: React.FunctionComponent<IPlaceItemProps> = ({
  place,
  onSelect,
}) => {
  return (
    <Pressable onPress={() => onSelect(place.id)}>
      <Image source={{ uri: place.imageUrl }} />
      <View>
        <Text>{place.name}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
