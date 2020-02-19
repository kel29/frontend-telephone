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

  const deleteGame = () => {
    const gameId = (props.navigation.getParam('game_id'))
    // will update game status to hidden
  }

  return (
    <Container style={Styles.backgroundColor}>
      <Content>
        {displayRounds()}
      </Content>
      <Footer style={Styles.marginStyle}>
        <FooterTab>
          <Button onPress={deleteGame}>
            <Icon style={Styles.dangerBtn} name='ios-trash' />
            <Text style={Styles.dangerBtn}>Delete</Text>
          </Button>
          <Button onPress={() => props.navigation.navigate('Home')}>
            <Icon style={Styles.primaryBtn} name='ios-home' />
            <Text style={Styles.primaryBtn}>Home</Text>
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
