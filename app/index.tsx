import React from "react";
import { View, Platform, ScrollView } from "react-native";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { OnyxProvider } from "./contexts/OnyxContext";
import { CameraComponent } from "./components/CameraComponent";
import { PhotoList } from "./components/PhotoList";
import { styles } from "./styles";

export default function App() {
  return (
    <PaperProvider>
      <OnyxProvider>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to ShopScan!!!</Text>
          {Platform.OS === "android" ? (
            <>
              <PhotoList />
              <CameraComponent />
            </>
          ) : (
            <Text style={styles.loadingText}>
              This app is only supported on Android.
            </Text>
          )}
        </View>
      </OnyxProvider>
    </PaperProvider>
  );
}
