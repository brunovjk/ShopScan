import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useOnyxContext } from "../contexts/OnyxContext";
import { styles } from "../styles";
import CONST from "../contexts/CONST";
import mobilenet from '@tensorflow-models/mobilenet';

export const DetectImages: React.FC = () => {
  const { photos, status } = useOnyxContext();
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const loadModelAndClassifyImages = async () => {
      const model = await mobilenet.load();

      const predictionsList = await Promise.all(
        photos.map(async (photo) => {
          if (photo.uri !== CONST.NO_PATH) {
            const response = await fetch(photo.uri);
            const blob = await response.blob();
            const img = document.createElement('img');
            img.src = URL.createObjectURL(blob);
            const preds = await model.classify(img);
            return preds;
          }
          return [];
        })
      );
      setPredictions(predictionsList);
    };

    if (photos.length > 0) {
      loadModelAndClassifyImages();
    }
  }, [photos]);

  return (
    <ScrollView style={styles.scrollContainer}>
      {status === CONST.STATUS.LOADING ? (
        <Text style={styles.loadingText}>Loading predictions...</Text>
      ) : photos && photos.length > 0 ? (
          <ScrollView>
            {predictions.map((preds, index) => (
              <View key={index} style={styles.predictionContainer}>
                <Text style={styles.photoId}>Image #{index + 1} Predictions:</Text>
                {preds.length > 0 ? (
                  preds.map((pred, i) => (
                    <Text key={i} style={styles.predictionText}>
                      {pred.className} - {pred.probability.toFixed(2)}
                    </Text>
                  ))
                ) : (
                  <Text style={styles.noPredictionText}>No predictions available</Text>
                )}
              </View>
            ))}
          </ScrollView>
      ) : (
        <Text style={styles.loadingText}>You don't have any photos yet.</Text>
      )}
    </ScrollView>
  );
};
