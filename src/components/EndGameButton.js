import React from 'react'
import { Button, Icon, Text } from 'native-base'
import { fetchAddress, postHeaders } from '../constants/Variables'
import { addRound } from '../actions/CurrentGameActions'
import { connect } from 'react-redux'

const EndGameButton = (props) => {
  const config = {
    ...postHeaders,
    body: JSON.stringify(props.roundInfo)
  }

  const endGame = () => {
    postRound()
      .then(props.navToDisplayGame)
  }

  const postRound = () => {
    return fetch(`${fetchAddress}game_rounds`, config)
      .then(resp => resp.json())
      .then(round => props.addRound(round))
      .catch(err => console.log(err))
  }

  return (
    <Button onPress={endGame}>
      <Icon name='ios-done-all' />
      <Text>End Game</Text>
    </Button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addRound: round => dispatch(addRound(round))
  }
}

export default connect(null, mapDispatchToProps)(EndGameButton)
