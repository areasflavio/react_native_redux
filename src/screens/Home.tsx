import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

import { cakeOrdered, cakeRestocked } from '../features/cake/cakeActions';
import {
  iceCreamOrdered,
  iceCreamRestocked,
} from '../features/iceCream/iceCreamActions';
import { fetchUsers } from '../features/user/userSlice';

export function Home() {
  const { cake, iceCream, user } = useAppSelector((state: RootState) => state);

  const dispatch = useAppDispatch();

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

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
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

      <View style={styles.section}>
        <Text style={styles.title}>Users: {user.users.length}</Text>
        <View style={styles.divider}></View>
        <Button
          title="Fetch users"
          onPress={handleFetchUsers}
          disabled={user.loading}
        />
        <View style={styles.divider}></View>
        {user.error && <Text style={styles.error}>{user.error}</Text>}
        {!user.error && !user.loading && (
          <FlatList
            data={user.users}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        )}
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
    padding: 16,
    margin: 8,
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
  error: {
    color: '#c80815',
  },
});
