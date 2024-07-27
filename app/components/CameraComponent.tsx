import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Camera as CameraLib,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";
import { Button } from "react-native-paper";
import Onyx from "react-native-onyx";
import { useOnyxContext } from "../contexts/OnyxContext";
import { styles } from "./../styles";
import CONST from "../contexts/CONST";

import '@tensorflow/tfjs-react-native';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const ONYXKEYS = { LIST_PHOTO: CONST.LIST_PHOTO };

export const CameraComponent: React.FC = () => {
  const { photos } = useOnyxContext();
  const device = useCameraDevice("back");
  const camera = useRef<CameraLib>(null);
  const { hasPermission, requestPermission } = useCameraPermission();
  const [openCamera, setOpenCamera] = useState(false);

  const detectObjects = async (img: any) => {  
    // Load the model.
    const model = await cocoSsd.load();
  
    // Classify the image.
    const predictions = await model.detect(img);
  
    console.log('Predictions: ');
    console.log(predictions);
  };

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
      detectObjects(imagePath);
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
