import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Container, Text } from 'native-base'

const HomeScreen = (props) => {
  const startGame = () => {
    props.navigation.navigate('StartGame')
  }

  const showPastGames = () => {
    props.navigation.navigate('PastGames')
  }

  const showRules = () => {
    props.navigation.navigate('Rules')
  }

  return (
    <Container style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome to Telephone!
      </Text>
      <Button block large success onPress={startGame}>
        <Text style={styles.buttonText}>
          Start New Game
        </Text>
      </Button>
      <Button block large primary onPress={showPastGames}>
        <Text style={styles.buttonText}>
          Past Games
        </Text>
      </Button>
      <Button block large info onPress={showRules}>
        <Text style={styles.buttonText}>
          Rules
        </Text>
      </Button>
    </Container>
  )
}

export default HomeScreen

HomeScreen.navigationOptions = {
  headerStyle: { backgroundColor: '#030203' }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#F0F5F5'
  },
  welcomeText: {
    fontFamily: 'covered-by-your-grace',
    fontSize: 60,
    lineHeight: 70,
    textAlign: 'center'
  },
  buttonText: {
    fontFamily: 'patrick-hand-sc'
  }
})
