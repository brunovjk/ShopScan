import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import Onyx from "react-native-onyx";
import { useOnyxContext } from "../contexts/OnyxContext";
import { styles } from "../styles";
import CONST from "../contexts/CONST";

const ONYXKEYS = { LIST_PHOTO: CONST.LIST_PHOTO };

export const PhotoList: React.FC = () => {
  const { photos, status } = useOnyxContext();

  const clearList = () => {
    Onyx.set(ONYXKEYS.LIST_PHOTO, { value: [] });
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      {status === CONST.STATUS.LOADING ? (
        <Text style={styles.loadingText}>Loading photos...</Text>
      ) : photos && photos.length > 0 ? (
        <>
          <Button mode="contained" style={styles.button} onPress={clearList}>
            Clear List
          </Button>
          <ScrollView>
            {photos.map((photo, index) => (
              <View key={index} style={styles.photoContainer}>
                {photo.uri === CONST.NO_PATH ? (
                  <Text>{CONST.NO_PATH}</Text>
                ) : (
                  <>
                    <Image source={{ uri: photo.uri }} style={styles.photo} />
                    <Text style={styles.photoId}>#{index + 1}</Text>
                  </>
                )}
              </View>
            ))}
          </ScrollView>
        </>
      ) : (
        <Text style={styles.loadingText}>You don't have any photos yet.</Text>
      )}
    </ScrollView>
  );
};
