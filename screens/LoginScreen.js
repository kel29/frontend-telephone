import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native'
import {
  Button,
  Text,
  Container,
  Form,
  Item,
  InputGroup,
  Icon,
  Input
} from 'native-base'
import GameContext from '../context/GameContext'

class LoginScreen extends PureComponent {
  static contextType = GameContext

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
    let user = this.state.users.find(user => user.name === this.state.username.toLowerCase() && user.email === this.state.email.toLowerCase())
    if (user) {
      this.context.setUser(user.id)
      this.props.navigation.navigate('Home')
    } else {
      alert('Unable to login. Please review your credentials or create an account.')
    }
  }

  attemptCreateAccount = () => {
    let preexistingUser = this.state.users.find(user => user.name === this.state.username.toLowerCase() || user.email === this.state.email.toLowerCase())
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
        name: this.state.username.toLowerCase(),
        email: this.state.email.toLowerCase(),
        password: this.state.password
      })
    }

    fetch('http://localhost:3000/users', config)
    .then(resp => resp.json())
    .then(user => {
      if (user.id) {
        this.context.setUser(user.id)
        this.props.navigation.navigate('Home')
      } else {
        alert('Unable to create account. Please note, all form fields are required and email addresses must be valid.')
      }
    })
  }

  render () {
    return (
      <Container style={styles.container}>
        <Text style={styles.welcome}>
          Welcome! Please Login or Sign Up:
        </Text>
        <Form>
          <Item>
            <InputGroup>
              <Icon name='ios-person'/>
              <Input 
                placeholder='Username' 
                onChangeText={text => this.handleTyping(text, 'username')}
                value={this.state.username}
              />
            </InputGroup>
          </Item>
          <Item>
            <InputGroup>
              <Icon name='ios-mail'/>
              <Input 
                placeholder='Email'
                onChangeText={text => this.handleTyping(text, 'email')}
                value={this.state.email}
              />
            </InputGroup>
          </Item>
          <Item>
            <InputGroup>
              <Icon name='ios-unlock'/>
              <Input 
                placeholder='Password'
                onChangeText={text => this.handleTyping(text, 'password')}
                value={this.state.password}
              />
            </InputGroup>
          </Item>
        </Form>
        <View style={styles.formButtons}>
          <Button primary onPress={this.attemptCreateAccount}>
            <Text> 
              Create Account 
            </Text> 
          </Button>
          <Button primary onPress={this.attemptLogin}>
            <Text>
              Login
            </Text> 
          </Button>
        </View>
      </Container>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    margin: 10
  },
  formButtons: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    margin: 10,
    flexDirection: 'row'
  }
})
