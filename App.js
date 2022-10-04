import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { configureStore } from '@reduxjs/toolkit';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { filmesReducer } from './src/reducers/filmesReducer';
import { Details } from './src/screens/Details';
import { Home } from './src/screens/Home';

const Stack = createNativeStackNavigator();

const store = configureStore({
  reducer: {
    filmes: filmesReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
