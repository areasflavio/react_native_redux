import { StyleSheet, Text, View } from 'react-native';

export function Details({ route }) {
  return (
    <View style={styles.container}>
      <Text>Details: Id={route.params.id}</Text>
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
