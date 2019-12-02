import React from 'react'
import { Button, Icon, Text } from 'native-base'
import { API_ROOT, POST_HEADERS } from '../services/api'
import { addRound } from '../actions/CurrentGameActions'
import { connect } from 'react-redux'

const NextPlayerButton = (props) => {
  const config = {
    ...POST_HEADERS,
    body: JSON.stringify(props.roundInfo)
  }

  const nextPlayer = () => {
    postRound()
      .then(props.navigateToNext)
  }

  const postRound = () => {
    return fetch(`${API_ROOT}game_rounds`, config)
      .then(resp => resp.json())
      .then(round => props.addRound(round))
      .catch(err => console.log(err))
  }

  return (
    <Button onPress={nextPlayer}>
      <Icon name='ios-checkbox-outline' />
      <Text>Submit</Text>
    </Button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addRound: round => dispatch(addRound(round))
  }
}

export default connect(null, mapDispatchToProps)(NextPlayerButton)
