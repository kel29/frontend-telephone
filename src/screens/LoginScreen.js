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

  facebookAttemptLogin = (facebookData) => {
    let user = this.state.users.find(user => user.facebook_id === facebookData.id)
    if (user) {
      this.props.setUserId(user.id)
      this.props.navigation.navigate('Home')
    } else {
      this.facebookCreateAccount(facebookData)
    }
  }

  facebookCreateAccount = (facebookData) => {
    const config = {
      ...POST_HEADERS,
      body: JSON.stringify({
        name: facebookData.name,
        email: facebookData.email,
        facebook_id: facebookData.id
      })
    }

    fetch(`${API_ROOT}users`, config)
    .then(resp => resp.json())
    .then(user => {
      if (user.id) {
        this.props.setUserId(user.id)
        this.props.navigation.navigate('Home')
      } else {
        alert('Unable to create account.')
      }
    })
  }

  facebookLogin = async () => {
    try {
      const {
        type,
        token,
        expires
      } = await Facebook.logInWithReadPermissionsAsync('983634002001933', {
        permissions: ['public_profile', 'email']
      })
      if (type === 'success') {
        fetch(`https://graph.facebook.com/me?access_token=${token}`)
        .then(resp => resp.json())
        .then(user => this.facebookAttemptLogin(user))
      } else {
        alert('Login cancelled, please login to continue')
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`)
    }
  }

  render () {
    return (
      <Container style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Telephone! Please Login:
        </Text>
          <Button primary onPress={this.facebookLogin}>
            <Text>
              Login with Facebook
            </Text> 
          </Button>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    margin: 10,
    textAlign: 'center'
  },
  formButtons: {
    margin: 10
  }
})
