import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native'

class LoginScreen extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    users: []
  }

  fetchUsers = () => {
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => this.setState({
      users: users
    }))
  }

  componentDidMount () {
    this.fetchUsers()
  }

  handleTyping = (text, field) => {
    this.setState({
      [field]: text
    })
  }

  attemptLogin = () => {
    let user = this.state.users.find(user => user.name === this.state.username && user.email === this.state.email)
    if (user) {
      this.props.navigation.navigate('Home')
    } else {
      alert('Unable to login. Please review your credentials or create an account.')
    }
  }

  attemptCreateAccount = () => {
    let preexistingUser = this.state.users.find(user => user.name === this.state.username || user.email === this.state.email)
    if (preexistingUser && preexistingUser.email == this.state.email) {
      alert(`'${this.state.email}' is currently associated with another account. Please use another email. Or if you already have an account, please login.`)
    } else if (preexistingUser && preexistingUser.name == this.state.username) {
      alert(`'${this.state.username}' is currently associated with another account. Please select a different username. Or if you already have an account, please login.`)
    } else {
      this.createAccount()
    }
  }

  createAccount = () => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    }

    fetch('http://localhost:3000/users', config)
    .then(resp => resp.json())
    .then(user => {
      if (user.id) {
        this.props.navigation.navigate('Home')
      } else {
        alert('Unable to create account. Please note, all form fields are required and email addresses must be valid.')
      }
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>
          Welcome! Please Login or Sign Up:
        </Text>
          <TextInput
            style={styles.formInput}
            placeholder='Username'
            onChangeText={text => this.handleTyping(text, 'username')}
            value={this.state.username}
          />
          <TextInput
            style={styles.formInput}
            placeholder='Email'
            onChangeText={text => this.handleTyping(text, 'email')}
            value={this.state.email}
          />
          <TextInput
            style={styles.formInput}
            placeholder='Password'
            onChangeText={text => this.handleTyping(text, 'password')}
            value={this.state.password}
          />
        <Button title='Login' onPress={this.attemptLogin} />
        <Button title='Create Account' onPress={this.attemptCreateAccount} />
      </View>
    )
  }
}

LoginScreen.navigationOptions = {
  title: 'Please Login'
}

export default LoginScreen

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
    width: 150,
    margin: 10
  }
})
