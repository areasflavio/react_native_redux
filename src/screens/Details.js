import { useRoute } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import Rating from 'react-native-easy-rating';
import { useDispatch, useSelector } from 'react-redux';
import { setRating } from '../reducers/filmesReducer';

export function Details() {
  const filmes = useSelector((state) => state.filmes);
  const { params } = useRoute();
  const dispatch = useDispatch();

  const filme = filmes.data.find((filme) => filme.id === params.id);

  const handleRating = (value) => {
    dispatch(
      setRating({
        id: params.id,
        rating: value,
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: filme.poster }} style={styles.poster} />
      <Text style={styles.title}>{filme.title}</Text>
      <Text style={styles.released}>{filme.released}</Text>
      <Text style={styles.genre}>{filme.genre}</Text>

      <View style={styles.plot}>
        <Text>{filme.plot}</Text>
      </View>

      <View style={styles.rating}>
        <Rating
          rating={filme.rating}
          max={5}
          iconWidth={24}
          iconHeight={24}
          onRate={handleRating}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 240,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  released: {
    color: '#999999',
  },
  plot: {
    padding: 16,
  },
  rating: {
    padding: 16,
    backgroundColor: '#dedede',
  },
});
