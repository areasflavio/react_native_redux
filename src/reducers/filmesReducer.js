import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    // data from TMDB
    {
      id: '1',
      title: 'Avatar',
      released: '18 Dec 2009',
      genre: 'Action, Adventure, Fantasy',
      plot: 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
      poster:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
      rating: 5,
    },
    {
      id: '2',
      title: '300',
      released: '30 Mar 2007',
      genre: 'Action, Adventure, War',
      plot: "Based on Frank Miller's graphic novel, '300' is very loosely based the 480 B.C. Battle of Thermopylae, where the King of Sparta led his army against the advancing Persians; the battle is said to have inspired all of Greece to band together against the Persians, and helped usher in the world's first democracy.",
      poster:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9W49fy5G7v9Ed3CXtvMi41YqZtt.jpg',
      rating: 4,
    },
    {
      id: '3',
      title: 'The Fast and the Furious ',
      released: '28 Set 2001',
      genre: 'Action, Crime, Thriller',
      plot: "Dominic Toretto is a Los Angeles street racer suspected of masterminding a series of big-rig hijackings. When undercover cop Brian O'Conner infiltrates Toretto's iconoclastic crew, he falls for Toretto's sister and must choose a side: the gang or the LAPD",
      poster:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lgCEntS9mHagxdL5hb3qaV49YTd.jpg',
      rating: 3,
    },
  ],
};

const filmesSlice = createSlice({
  name: 'filmes',
  initialState,
  reducers: {
    setRating: (state, action) => {
      const filme = state.data.find((filme) => filme.id === action.payload.id);

      filme.rating = action.payload.rating;
    },
  },
});

export const { setRating } = filmesSlice.actions;
export const filmesReducer = filmesSlice.reducer;
