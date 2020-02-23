import React from 'react'
import {
  Container,
  Content,
  Button,
  Footer,
  Text,
  Icon,
  FooterTab
} from 'native-base'
import SentenceDisplay from '../components/SentenceDisplay'
import SketchDisplay from '../components/SketchDisplay'
import Styles from '../constants/Style'
import { API_ROOT } from '../services/api'

const GameDisplayScreen = (props) => {
  const displayRounds = () => {
    const gameRounds = props.navigation.getParam('game_rounds')
    return gameRounds.map(round => {
      if (round.drawing) {
        return <SketchDisplay drawing={round.drawing} key={round.id} />
      } else {
        return <SentenceDisplay sentence={round.sentence} key={round.id} />
      }
    })
  }

  const hideGame = () => {
    const gameId = (props.navigation.getParam('game_id'))
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_removed: true
      })
    }

    fetch(`${API_ROOT}games/${gameId}`, config)
    .then(resp => resp.json())
    .then(() => {
      if (props.navigation.getParam('reloadGames')) {
        props.navigation.getParam('reloadGames')()
        props.navigation.navigate('PastGames')
      } else {
        props.navigation.navigate('Home')
      }
    })
    .catch(error => alert(error))
  }

  return (
    <Container style={Styles.backgroundColor}>
      <Content>
        {displayRounds()}
      </Content>
      <Footer style={Styles.marginStyle}>
        <FooterTab>
          <Button onPress={hideGame}>
            <Icon style={Styles.dangerBtn} name='ios-trash' />
            <Text style={Styles.dangerBtn}>Delete</Text>
          </Button>
          <Button onPress={() => props.navigation.navigate('Home')}>
            <Icon style={Styles.primaryBtn} name='ios-home' />
            <Text style={Styles.primaryBtn}>Home</Text>
          </Button>
          <Button onPress={() => props.navigation.navigate('PastGames')}>
            <Icon style={Styles.secondaryBtn} name='md-list-box' />
            <Text style={Styles.secondaryBtn}>Past Games</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

export default GameDisplayScreen

GameDisplayScreen.navigationOptions = {
  headerStyle: { ...Styles.marginStyle }
}
