import React from 'react'
import {createStore} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'
import StackNavigator from './routes'

const initialState = {name: ''}
const store = createStore(reducers, initialState)

const App = () => (
    <Provider store={store}>
        <StackNavigator/>
    </Provider>
);

export default App
