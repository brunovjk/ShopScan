import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Provider as PaperProvider, Button, Text } from "react-native-paper";
import Onyx, { useOnyx } from "react-native-onyx";
import {
  Camera as CameraComponent,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

type ListPhotoType = {
  id: number;
  uri: string;
};

export default function App() {
  const CONST = {
    NO_PATH: "no-path",
  };

  // Onyx
  
  useEffect(() => {
    Onyx.init({ keys: ONYXKEYS });
  }, []);

  const ONYXKEYS = { LIST_PHOTO: "list_photo" };

  const [_photos, _status] = useOnyx(ONYXKEYS.LIST_PHOTO);

  const photos = (_photos as { value: ListPhotoType[] })?.value;
  const status = (_status as { status: "loading" | "loaded" })?.status;

  // Camera

  const device = useCameraDevice("back");
  const camera = useRef<CameraComponent>(null);

  const { hasPermission, requestPermission } = useCameraPermission();
  const [openCamera, setOpenCamera] = useState(false);

  const permitCamera = async () => {
    requestPermission();
  };

  const takePhoto = async () => {
    if (camera) {
      const photo = await camera?.current?.takePhoto();
      const newPhoto: ListPhotoType = {
        id: photos ? photos.length + 1 : 1,
        uri: `file://${photo?.path ?? CONST.NO_PATH}`,
      };
      const updatedPhotos = photos ? [...photos, newPhoto] : [newPhoto];
      Onyx.set(ONYXKEYS.LIST_PHOTO, { value: updatedPhotos });
      setOpenCamera(false);
    } else {
      console.log("No Camera");
      setOpenCamera(false);
    }
  };

  const clearList = async () => {
    Onyx.set(ONYXKEYS.LIST_PHOTO, { value: [] });
  };

  return (
    <PaperProvider>
      <View style={styles.phoneContainer}>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to ShopScan!!!</Text>

          {status === "loading" ? (
            <Text style={styles.loadingText}>Loading photos...</Text>
          ) : photos && photos.length > 0 ? (
            <ScrollView>
              {photos.map((photo, index) => (
                <View key={index} style={styles.photoContainer}>
                  <Text>Photo {index + 1}:</Text>
                  {photo.uri === CONST.NO_PATH ? (
                    <Text>{CONST.NO_PATH}</Text>
                  ) : (
                    <Image source={{ uri: photo.uri }} style={styles.photo} />
                  )}
                </View>
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.loadingText}>
              You don't have any photos yet.
            </Text>
          )}

          {openCamera && device ? (
            <>
              <CameraComponent
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
              />
              <Button onPress={takePhoto}>Take Photo</Button>
            </>
          ) : (
            <>
              {device ? (
                <Button
                  mode="contained"
                  onPress={
                    hasPermission
                      ? () => {
                          setOpenCamera(true);
                        }
                      : permitCamera
                  }
                  style={styles.button}
                >
                  {hasPermission ? "Open Camera" : "Permit Camera"}
                </Button>
              ) : (
                <Text style={styles.loadingText}>
                  Access a real device with a camera to use our App.
                </Text>
              )}
            </>
          )}
          {!openCamera && photos && photos.length > 0 && (
            <Button onPress={clearList}>Clear List</Button>
          )}
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  phoneContainer: {
    flex: 1,
    maxWidth: 640,
    padding: 48,
    margin: "auto",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "lightgray",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 32,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 36,
    textAlign: "center",
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  photoContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  photo: {
    width: 300,
    height: 400,
    resizeMode: "contain",
  },
});
