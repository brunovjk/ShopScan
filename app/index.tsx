import React from "react";
import { View } from "react-native";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { OnyxProvider } from "./contexts/OnyxContext";
import { CameraComponent } from "./components/CameraComponent";
import { DetectImages } from "./components/DetectImages";
import { PhotoList } from "./components/PhotoList";
import { styles } from "./styles";

const Component: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to ShopScan!!!</Text>
      <PhotoList />
      <CameraComponent />
      <DetectImages />
    </View>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <OnyxProvider>
        <Component />
      </OnyxProvider>
    </PaperProvider>
  );
}
