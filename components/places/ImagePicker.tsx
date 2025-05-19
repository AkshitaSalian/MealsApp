import * as React from "react";
import { Alert, StyleSheet, Text, View, Image } from "react-native";
import IconButton from "../IconButton";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";

interface IImagePickerProps {}

const ImagePicker: React.FunctionComponent<IImagePickerProps> = (props) => {
  const [imageUri, setImageUri] = React.useState<string | null>(null);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const handleTakeImage = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (image.assets) setImageUri(image?.assets[0]?.uri);
  };
  return (
    <View style={styles.root}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <View style={styles.preview}></View>
      )}

      <View style={styles.container}>
        <Text> Take a picture</Text>
        <IconButton icon="camera" color="black" onPress={handleTakeImage} />
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  root: {
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
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
  },
  preview: {
    width: "100%",
    height: 200,
    backgroundColor: "#f1f1f1",
    marginBottom: 10,
    borderRadius: 8,
  },
});
