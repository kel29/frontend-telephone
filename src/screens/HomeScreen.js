import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Container, Text } from 'native-base'
import Welcome from '../components/Welcome'
import Styles from '../constants/Style'

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
      <Welcome />
      <Button block large success onPress={startGame}>
        <Text style={Styles.buttonText}>
          Start New Game
        </Text>
      </Button>
      <Button block large primary onPress={showPastGames}>
        <Text style={Styles.buttonText}>
          Past Games
        </Text>
      </Button>
      <Button block large info onPress={showRules}>
        <Text style={Styles.buttonText}>
          Rules
        </Text>
      </Button>
    </Container>
  )
}

export default HomeScreen

HomeScreen.navigationOptions = {
  headerStyle: { ...Styles.marginStyle }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    ...Styles.backgroundColor
  }
})
