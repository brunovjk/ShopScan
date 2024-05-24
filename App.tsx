import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';
import Onyx, { useOnyx } from 'react-native-onyx';
import { StatusBar } from 'expo-status-bar';

// const ONYXKEYS = {
//   COUNTER: 'counter',
// };

// Onyx.init({ keys: ONYXKEYS });

export default function App() {
  // const [_value, _status] = useOnyx(ONYXKEYS.COUNTER);

  const [counter, setCounter] = React.useState<{
    value: number;
    status: 'loading' | 'loaded';
  }>({
    value: 0,
    status: 'loaded'
  });
  // const value = (_value as { value: number })?.value;
  // const status = (_status as { status: 'loading' | 'loaded' })?.status;

  const incrementCount = () => {
    if (counter.status !== 'loaded') { return; }
    setCounter((prevState) => ({
      ...prevState,
      value: prevState.value + 1
    }));
    // Onyx.set(ONYXKEYS.COUNTER, { value: value + 1 });
  };

  const resetCount = () => {
    if (counter.status !== 'loaded') { return; }
    setCounter((prevState) => ({
      ...prevState,
      value: 0
    }));
    // Onyx.set(ONYXKEYS.COUNTER, { value: 0 });
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {status === 'loading' ? (
          <Text>Loading counter...</Text>
        ) : (
          <>
            <Text>Counter Value: {counter.value}</Text>
            <Button mode="contained" onPress={incrementCount}>
              Increment Counter
            </Button>
            <Button mode="contained" onPress={resetCount}>
              Reset Counter
            </Button>
          </>
        )}
      </View>
      <StatusBar style="auto" />
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



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });