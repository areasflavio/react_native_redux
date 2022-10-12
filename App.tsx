import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { store } from './src/app/store';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Home />
    </Provider>
  );
}
