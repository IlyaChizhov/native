import React from 'react';
import {createStore} from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './reducers';
import { Provider } from 'react-redux';
import Hello from './componets/Hello';

const initialState = { name: 'Irishka' };
const store = createStore(reducers, initialState);

const App = () => (
    <Provider store={store}>
        <View style={styles.container}>
            <Hello />
        </View>
    </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
