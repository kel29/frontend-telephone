import React from 'react'
import { Button, Icon, Text } from 'native-base'
import { API_ROOT, POST_HEADERS } from '../services/api'
import { addRound } from '../actions/CurrentGameActions'
import { connect } from 'react-redux'

const EndGameButton = (props) => {
  const config = {
    ...POST_HEADERS,
    body: JSON.stringify(props.roundInfo)
  }

  const endGame = () => {
    postRound()
      .then(props.navToDisplayGame)
  }

  const postRound = () => {
    return fetch(`${API_ROOT}game_rounds`, config)
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
