import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';
// import Onyx, { useOnyx } from 'react-native-onyx';
import { MaterialIcons } from '@expo/vector-icons';

// const ONYXKEYS = {
//   COUNTER: 'counter',
// };

// Onyx.init({
//   keys: ONYXKEYS,
// });

export default function App() {
  // const [_value, _status] = useOnyx(ONYXKEYS.COUNTER);

  // const value = (_value as { value: number })?.value;
  // const status = (_status as { status: 'loading' | 'loaded' })?.status;

  // const incrementCount = () => {
  //   if (status !== 'loaded') { return; }
  //   Onyx.set(ONYXKEYS.COUNTER, { value: value + 1 });
  // };

  // const resetCount = () => {
  //   if (status !== 'loaded') { return; }
  //   Onyx.set(ONYXKEYS.COUNTER, { value: 0 });
  // };

  return (
    <PaperProvider>
      <View style={styles.phoneContainer}>
        <View style={styles.container}>
          {/* {status === 'loading' ? (<Text style={styles.loadingText}>Loading counter...</Text>) : ( */}
          {/* <> */}
          <Text style={styles.welcomeText}>Welcome to ShopScan</Text>
          <View style={styles.counterContainer}>
            <MaterialIcons name="timer" size={32} color="#FFA500" />
            {/* <Text style={styles.counterText}>Counter Value: {value}</Text> */}
          </View>

          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              // onPress={incrementCount}
              icon={() => <MaterialIcons name="add" size={24} color="white" />}
              style={[styles.button, { backgroundColor: '#1ca658' }]}
            >
              Increment
            </Button>
            <Button
              mode="contained"
              // onPress={resetCount}
              icon={() => <MaterialIcons name="refresh" size={24} color="white" />}
              style={[styles.button, { backgroundColor: '#3F8EFF' }]}
            >
              Reset
            </Button>
          </View>
          {/* </> */}
          {/* )} */}
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
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterText: {
    fontSize: 24,
    marginLeft: 10,
  },
  buttonContainer: {
    gap: 16,
    flexDirection: 'column',
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: 20,
  },
});