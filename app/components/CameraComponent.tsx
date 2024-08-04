import React, { useRef, useState } from "react";
import { StyleSheet, Platform } from "react-native";
import {
  Camera as CameraLib,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";
import { Button, Text } from "react-native-paper";
import Onyx from "react-native-onyx";
import { useOnyxContext } from "../contexts/OnyxContext";
import { styles } from "./../styles";
import CONST from "../contexts/CONST";

const ONYXKEYS = { LIST_PHOTO: CONST.LIST_PHOTO };

const Component: React.FC = () => {
  const { photos } = useOnyxContext();
  const device = useCameraDevice("back");
  const camera = useRef<CameraLib>(null);
  const { hasPermission, requestPermission } = useCameraPermission();
  const [openCamera, setOpenCamera] = useState(false);

  const permitCamera = async () => {
    requestPermission();
  };

  const takePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      const imagePath = `file://${photo?.path ?? CONST.NO_PATH}`;
      const newPhoto = {
        id: photos ? photos.length + 1 : 1,
        uri: imagePath,
      };
      const updatedPhotos = photos ? [...photos, newPhoto] : [newPhoto];
      Onyx.set(ONYXKEYS.LIST_PHOTO, { value: updatedPhotos });
      setOpenCamera(false);
    } else {
      console.log("No Camera");
      setOpenCamera(false);
    }
  };

  if (!device) {
    return null;
  }

  return openCamera ? (
    <>
      <CameraLib
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <Button mode="contained" style={styles.button} onPress={takePhoto}>
        Take Photo
      </Button>
    </>
  ) : (
    <Button
      mode="contained"
      style={styles.button}
      onPress={hasPermission ? () => setOpenCamera(true) : permitCamera}
    >
      {hasPermission ? "Open Camera" : "Permit Camera"}
    </Button>
  );
};

export const CameraComponent: React.FC = () => {
  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <Component />
      ) : (
        <Text style={styles.loadingText}>
          Camera only supported on Android and iOS.
        </Text>
      )}
    </>
  );
};
