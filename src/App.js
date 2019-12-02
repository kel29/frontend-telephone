import React from 'react'
import { Container } from 'native-base'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import AppNavigator from './navigation/AppNavigator'

const store = createStore(reducer)

const App = (props) => {
  return (
    <Provider store={store}>
      <Container>
        <AppNavigator />
      </Container>
    </Provider>
  )
}

export default App
