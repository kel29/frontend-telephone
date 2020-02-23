import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Container, Text } from 'native-base'
import { connect } from 'react-redux'
import Styles from '../constants/Style'

const InBetweenScreen = (props) => {
  const nextScreen = props.navigation.getParam('screen')

  const navigateToNext = () => {
    props.navigation.navigate(nextScreen)
  }

  const endGame = () => {
    props.navigation.navigate('Display', {
      game_id: props.gameId,
      game_rounds: props.gameRounds
    })
  }

  return (
    <Container>
      <Container style={styles.container}>
        <Text style={styles.passingText}>
          Pass the phone to the next player.
        </Text>
        <Button block large success onPress={navigateToNext} style={styles.buttons}>
          <Text style={Styles.buttonText}>
          Start Next Turn
          </Text>
        </Button>
        <Button block large danger onPress={endGame} style={styles.buttons}>
          <Text style={Styles.buttonText}>
          End Game
          </Text>
        </Button>
      </Container>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    gameId: state.gameId,
    gameRounds: state.gameRounds
  }
}

export default connect(mapStateToProps)(InBetweenScreen)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    ...Styles.backgroundColor
  },
  passingText: {
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'patrick-hand-sc',
    marginHorizontal: 10,
    marginVertical: 20
  },
  buttons: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 5
  }
})
