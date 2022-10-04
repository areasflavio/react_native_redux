import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

export function Home() {
  const filmes = useSelector((state) => state.filmes);

  const navigation = useNavigation();

  const handleNavigation = (movieId) =>
    navigation.navigate('Details', { id: movieId });

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => handleNavigation(item.id)}
            style={styles.listItem}
          >
            <Image source={{ uri: item.poster }} style={styles.poster} />

            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.genre}>{item.genre}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
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
  list: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    padding: 8,
    backgroundColor: '#dedede',
  },
  poster: {
    width: 64,
    height: 64,
  },
  info: {
    marginLeft: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  genre: {
    color: '#666666',
  },
});
