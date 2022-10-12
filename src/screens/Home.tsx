import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../app/store';
import { cakeOrdered, cakeRestocked } from '../features/cake/cakeActions';
import {
  iceCreamOrdered,
  iceCreamRestocked,
} from '../features/iceCream/iceCreamActions';

export function Home() {
  const cake = useSelector((state: RootState) => state.cake);
  const iceCream = useSelector((state: RootState) => state.iceCream);

  const dispatch = useDispatch();

  const handleCakeOrder = () => {
    dispatch(cakeOrdered());
  };

  const handleCakeRestocked = () => {
    dispatch(cakeRestocked(3));
  };

  const handleIceCreamOrder = () => {
    dispatch(iceCreamOrdered());
  };

  const handleIceCreamRestocked = () => {
    dispatch(iceCreamRestocked(5));
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Number of cakes: {cake.numOfCakes}</Text>
        <View style={styles.divider}></View>
        <Button title="Order cake" onPress={handleCakeOrder} />
        <View style={styles.divider}></View>
        <Button title="Restock cake" onPress={handleCakeRestocked} />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>
          Number of ice creams: {iceCream.numOfIceCreams}
        </Text>
        <View style={styles.divider}></View>
        <Button title="Order ice cream" onPress={handleIceCreamOrder} />
        <View style={styles.divider}></View>
        <Button title="Restock ice cream" onPress={handleIceCreamRestocked} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  section: {
    width: '100%',
    padding: 32,
    margin: 16,
    borderColor: '#999999',
    borderWidth: 2,
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    color: '#666666',
  },
  divider: {
    width: '100%',
    margin: 4,
  },
});
