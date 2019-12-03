import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import {
  Button,
  Container,
  Form,
  Icon,
  InputGroup,
  Input,
  Item,
  Text
} from 'native-base'
import { setUserId } from '../actions/UserActions'
import { connect } from 'react-redux'
import { API_ROOT, POST_HEADERS } from '../services/api'
import * as Facebook from 'expo-facebook';


class LoginScreen extends PureComponent {
  state = {
    username: '',
    email: '',
    password: '',
    users: []
  }

  fetchUsers = () => {
    fetch(`${API_ROOT}users`)
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
      this.props.setUserId(user.id)
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
      ...POST_HEADERS,
      body: JSON.stringify({
        name: this.state.username.toLowerCase(),
        email: this.state.email.toLowerCase(),
        password: this.state.password
      })
    }

    fetch(`${API_ROOT}users`, config)
    .then(resp => resp.json())
    .then(user => {
      if (user.id) {
        this.props.setUserId(user.id)
        this.props.navigation.navigate('Home')
      } else {
        alert('Unable to create account. Please note, all form fields are required and email addresses must be valid.')
      }
    })
  }

  // TODO work on this
  facebookLogin = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync('983634002001933', {
        permissions: ['public_profile', 'email']
      })
      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
        alert(`Hi ${(await response.json()).name}!`)
      } else {
        alert('Login cancelled')
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`)
    }
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
        <Container style={styles.formButtons}>
          <Button primary onPress={this.attemptCreateAccount}>
            <Text> 
              Create Account 
            </Text> 
          </Button>
          <Button primary onPress={this.facebookLogin}>
            <Text>
              Login with Facebook
            </Text> 
          </Button>
        </Container>
      </Container>
    )
  }
}

LoginScreen.navigationOptions = {
  title: 'Please Login'
}

const mapDispatchToProps = dispatch => {
  return {
    setUserId: userId => dispatch(setUserId(userId))
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
  container: {
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
