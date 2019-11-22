import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native'

class SignInScreen extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  attemptSignIn = () => {
    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>
          Welcome! Please Sign In:
        </Text>
          <TextInput
            style={styles.formInput}
            placeholder='Username'
            onChange={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            style={styles.formInput}
            placeholder='Email'
            onChange={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={styles.formInput}
            placeholder='Password'
            onChange={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Button title='Sign In' onPress={this.attemptSignIn} />
      </View>
    )
  }
}

SignInScreen.navigationOptions = {
  title: 'Please Sign In'
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInput: {
    height: 40,
    margin: 10
  }
})
