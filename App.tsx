import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';
import Onyx, { useOnyx } from 'react-native-onyx';

const ONYXKEYS = {
  COUNTER: 'counter',
};

Onyx.init({ keys: ONYXKEYS });

export default function App() {
  const [_value, _status] = useOnyx(ONYXKEYS.COUNTER);

  const value = (_value as { value: number })?.value;
  const status = (_status as { status: 'loading' | 'loaded' })?.status;

  const incrementCount = () => {
    if (status !== 'loaded') { return; }
    Onyx.set(ONYXKEYS.COUNTER, { value: value + 1 });
  };

  const resetCount = () => {
    if (status !== 'loaded') { return; }
    Onyx.set(ONYXKEYS.COUNTER, { value: 0 });
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {status === 'loading' ? (
          <Text>Loading counter...</Text>
        ) : (
          <>
            <Text>Counter Value: {value}</Text>
            <Button mode="contained" onPress={incrementCount}>
              Increment Counter
            </Button>
            <Button mode="contained" onPress={resetCount}>
              Reset Counter
            </Button>
          </>
        )}
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
