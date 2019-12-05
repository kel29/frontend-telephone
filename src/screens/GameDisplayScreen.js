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

  return (
    <Container style={Styles.backgroundColor}>
      <Content>
        {displayRounds()}
      </Content>
      <Footer style={Styles.footerColor}>
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

export default GameDisplayScreen

GameDisplayScreen.navigationOptions = {
  headerStyle: { backgroundColor: '#030203' }
}
