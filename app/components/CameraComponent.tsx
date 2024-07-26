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

import TextRecognition, { TextBlock } from '@react-native-ml-kit/text-recognition';

const ONYXKEYS = { LIST_PHOTO: CONST.LIST_PHOTO };

export const CameraComponent: React.FC = () => {
  const { photos } = useOnyxContext();
  const device = useCameraDevice("back");
  const camera = useRef<CameraLib>(null);
  const { hasPermission, requestPermission } = useCameraPermission();
  const [openCamera, setOpenCamera] = useState(false);

  const recognizeText = async (imagePath: string) => {
    console.log('[TextRecognition] - Path:', imagePath);
    try {
        const result = await TextRecognition.recognize(imagePath);
        const { blocks } = result;
        blocks.forEach((block: TextBlock) => {
          console.log('[-----------------------------------------------------------]');
          console.log('[TextRecognition] - Block text:', block.text);
          console.log('[-----------------------------------------------------------]');
        });
    } catch (error) {
        console.error('[TextRecognition] - Error recognizing text:', error);
    }
};

  const permitCamera = async () => {
    requestPermission();
  };

  const takePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      const newPhoto = {
        id: photos ? photos.length + 1 : 1,
        uri: `file://${photo?.path ?? CONST.NO_PATH}`,
      };
      recognizeText(`file://${photo?.path ?? CONST.NO_PATH}`);
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
