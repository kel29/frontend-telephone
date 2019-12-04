import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Container, Text } from 'native-base'
import { connect } from 'react-redux'

const InBetweenScreen = (props) => {
  const nextScreen = props.navigation.getParam('screen')

  const navigateToNext = () => {
    props.navigation.navigate(nextScreen)
  }

  const endGame = () => {
    props.navigation.navigate('Display', {
      id: props.gameId,
      game_rounds: props.gameRounds
    })
  }

  return (
    <Container>
      <Container style={styles.container}>
        <Text style={styles.passingText}>
          Pass the phone to the next player.
        </Text>
        <Button block large primary onPress={navigateToNext} style={styles.buttons}>
          <Text>
          Start Next Turn
          </Text>
        </Button>
        <Button block large danger onPress={endGame} style={styles.buttons}>
          <Text>
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
    alignContent: 'center'
  },
  passingText: {
    fontSize: 40,
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
