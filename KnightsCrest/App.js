import 'react-native-gesture-handler';
import * as React from 'react';
import ReactDOM from 'react-dom/client'
import AppNavContainer from './AppNavContainer';
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <AppNavContainer />
  </Provider>
)
/*function App() {
  return(
      <AppNavContainer></AppNavContainer>
  )
}

export default App;*/