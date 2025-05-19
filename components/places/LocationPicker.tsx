import * as React from "react";
import { Alert, StyleSheet, View } from "react-native";
import Button from "../Button";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";

interface ILocationPickerProps {}

const LocationPicker: React.FunctionComponent<ILocationPickerProps> = (
  props
) => {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const verifyPermissions = async () => {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant location permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const onLocateUser = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = getCurrentPositionAsync();
    console.log("location", location);
  };

  const pickOnMap = () => {};

  return (
    <View style={styles.root}>
      <View style={styles.mappreview}></View>
      <View style={styles.buttonContainer}>
        <Button onPress={onLocateUser} title="Locate user" icon="location" />
        <Button onPress={pickOnMap} title="Pick on map" icon="picker" />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
  },
  mappreview: {
    width: "100%",
    height: 200,
    backgroundColor: "#f1f1f1",
    marginBottom: 10,
    borderRadius: 8,
  },
});
