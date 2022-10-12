import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../app/store';

export function Home() {
  const cake = useSelector((state: RootState) => state.cake);

  return (
    <View style={styles.container}>
      <Text>Number of cakes: {cake.numOfCakes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
