import React, { PureComponent } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { Button, Container, Icon, Text } from 'native-base'
import { setUserId } from '../actions/UserActions'
import { connect } from 'react-redux'
import { API_ROOT, POST_HEADERS } from '../services/api'
import * as Facebook from 'expo-facebook'
import Welcome from '../components/Welcome'


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

  async componentDidMount () {
    await this.fetchUsers()
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
      const { type, token } = await Facebook.logInWithReadPermissionsAsync('983634002001933', {
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
      <Container>
        <ImageBackground
          source={{uri: 'https://media.giphy.com/media/mm7Lao6VOpDYA/giphy.gif'}}
          style={styles.background}
        >
          <Welcome />
          <Button large primary onPress={this.facebookLogin} style={styles.button}>
            <Icon name="logo-facebook" />
            <Text>
              Login with Facebook
            </Text>
          </Button>
        </ImageBackground>
      </Container>
    )
  }
}

LoginScreen.navigationOptions = {
  header: null
}

const mapDispatchToProps = dispatch => {
  return {
    setUserId: userId => dispatch(setUserId(userId))
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  button: {
    marginHorizontal: 50
  }
})
