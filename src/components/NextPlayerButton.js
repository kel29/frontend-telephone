import React from 'react'
import { Button, Icon, Text } from 'native-base'
import { API_ROOT, POST_HEADERS } from '../services/api'
import { addRound } from '../actions/CurrentGameActions'
import { connect } from 'react-redux'
import Styles from '../constants/Style'

const NextPlayerButton = (props) => {
  const nextPlayer = () => {
    postRound()
    props.navToInBetween()
  }

  const postRound = () => {
    let config = {
      ...POST_HEADERS,
      body: JSON.stringify(props.roundInfo)
    }

    if (props.roundInfo.drawing) {
      const formData = new FormData()
      formData.append('game_id', props.roundInfo.game_id)
      formData.append('drawing', {
        uri: props.roundInfo.drawing,
        type: 'image/jpeg',
        name: require('path').basename(props.roundInfo.drawing)
      })

      config = {
        method: 'POST',
        body: formData
      }
    }

    return fetch(`${API_ROOT}game_rounds`, config)
      .then(resp => resp.json())
      .then(round => props.addRound(round))
      .catch(err => console.log(err))
  }

  return (
    <Button onPress={nextPlayer}>
      <Icon style={Styles.successBtn} name='ios-checkbox-outline' />
      <Text style={Styles.successBtn}>Submit</Text>
    </Button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addRound: round => dispatch(addRound(round))
  }
}

export default connect(null, mapDispatchToProps)(NextPlayerButton)
