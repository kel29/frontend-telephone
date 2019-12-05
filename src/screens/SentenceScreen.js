import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Footer,
  FooterTab
} from 'native-base'
import SentenceInput from '../components/SentenceInput'
import SketchDisplay from '../components/SketchDisplay'
import { connect } from 'react-redux'
import EndGameButton from '../components/EndGameButton'
import NextPlayerButton from '../components/NextPlayerButton'

class SentenceScreen extends PureComponent {
  state = {
    sentence: ''
  }

  handleTyping = (sentence) => {
    this.setState({ sentence })
  }

  navToInBetween = () => {
    this.props.navigation.navigate('InBetween', {screen: 'Sketch'})
  }

  navToDisplayGame = () => {
    this.props.navigation.navigate('Display', {
      id: this.props.gameId,
      game_rounds: this.props.gameRounds
    })
  }

  render () {
    return (
      <Container style={styles.container}>
        <Container>
          <SentenceInput handleTyping={this.handleTyping} />
        </Container>
        <SketchDisplay
          drawing={this.props.gameRounds[this.props.gameRounds.length - 1].drawing}
        />
        <Footer style={styles.footer}>
          <FooterTab>
            <EndGameButton
              roundInfo={{sentence: this.state.sentence, game_id: this.props.gameId}}
              navToDisplayGame={this.navToDisplayGame}
            />
            <NextPlayerButton
              roundInfo={{sentence: this.state.sentence, game_id: this.props.gameId}}
              navToInBetween={this.navToInBetween}
            />
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameId: state.gameId,
    gameRounds: state.gameRounds
  }
}

export default connect(mapStateToProps)(SentenceScreen)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F5F5'
  },
  footer: {
    backgroundColor: '#030203'
  }
})
