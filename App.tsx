import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Test Text</Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
