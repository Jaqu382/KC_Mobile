import 'react-native-gesture-handler';
import * as React from 'react';
import AppNavContainer from './AppNavContainer';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return(
    <Provider store={store}>
      <AppNavContainer />
    </Provider>
  )
}

export default App;