import React from 'react'
import { Button, Icon, Text } from 'native-base'
import { fetchAddress, postHeaders } from '../constants/Variables'
import { addRound } from '../actions/CurrentGameRoundsActions'
import { connect } from 'react-redux'

const NextPlayerButton = (props) => {
  const config = {
    ...postHeaders,
    body: JSON.stringify(props.roundInfo)
  }

  const nextPlayer = () => {
    updateCurrentGameRounds()
    postRound()
  }

  const postRound = () => {
    fetch(`${fetchAddress}game_rounds`, config)
      .then(props.navigateToNext())
      .catch(err => console.log(err))
  }

  const updateCurrentGameRounds = () => {
    props.addRound(props.roundInfo)
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
