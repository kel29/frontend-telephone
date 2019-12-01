import React from 'react'
import { } from 'react-native'
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

const GameDisplayScreen = (props) => {
  const displayRounds = () => {
    const gameRounds = props.navigation.getParam('game_rounds')
    return gameRounds.map(round => {
      if (round.sentence) {
        return <SentenceDisplay sentence={round.sentence} key={round.id} />
      } else {
        return <SketchDisplay drawing={round.drawing} key={round.id} />
      }
    })
  }

  return (
    <Container>
      <Content>
        {displayRounds()}
      </Content>
      <Footer>
        <FooterTab>
          <Button onPress={() => props.navigation.navigate('Home')}>
            <Icon name='ios-home' />
            <Text>Home</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

GameDisplayScreen.navigationOptions = {
  headers: null
}

export default GameDisplayScreen
