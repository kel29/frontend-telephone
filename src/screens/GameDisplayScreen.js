import React from 'react'
import { StyleSheet } from 'react-native'
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
      if (round.drawing) {
        return (
          <SketchDisplay drawing={round.drawing} key={round.id} />
        )
      } else {
        return (
          <SentenceDisplay sentence={round.sentence} key={round.id} />
        )
      }
    })
  }

  return (
    <Container style={styles.container}>
      <Content>
        {displayRounds()}
      </Content>
      <Footer style={styles.footer}>
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
  headerStyle: { backgroundColor: '#030203' }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F5F5'
  },
  footer: {
    backgroundColor: '#030203'
  }
})

export default GameDisplayScreen
