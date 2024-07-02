import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';
import Onyx, { useOnyx } from 'react-native-onyx';
import { useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

type ListPhotoType = {
  id: number,
  uri: string
}

export default function App() {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission()

  const ONYXKEYS = { LIST_PHOTO: 'list_photo' };

  const [_photos, _status] = useOnyx(ONYXKEYS.LIST_PHOTO);

  const photos = (_photos as { status: ListPhotoType[] })?.status;
  const status = (_status as { status: 'loading' | 'loaded' })?.status;

  useEffect(() => {
    Onyx.init({ keys: ONYXKEYS });
  }, []);

  const takePhoto = async () => {
    // const photo = await Camera.takePhoto();
    // const newPhotos = photos ? [...photos, photo] : [photo];
    // Onyx.set(ONYXKEYS.LIST_PHOTO, newPhotos);
    console.log('Say XXxxxxx');
  };

  return (
    <PaperProvider>
      <View style={styles.phoneContainer}>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to ShopScan!!!</Text>
          {status === 'loading' ? (
            <Text style={styles.loadingText}>Loading photos...</Text>
          ) : photos && photos.length > 0 ? (
            <ScrollView>
              {photos.map((photo, index) => (
                <Text key={index}>Photo {index + 1}: {photo.uri}</Text>
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.loadingText}>You don't have any photos yet.</Text>
          )}
          {device == null ? (
            <Text style={styles.loadingText}>Access a real device with a camera to use our App.</Text>
          ) : (
            <Button
              mode="contained"
              onPress={hasPermission ? takePhoto : requestPermission}
              style={styles.button}
            >
              {hasPermission ? 'Take Photo' : 'Permit Camera'}
            </Button>
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
    maxHeight: 480,
    padding: 48,
    margin: 'auto',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'lightgray',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 32,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 36,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: 20,
  },
});
