import React, { PureComponent } from 'react'
import {
  Container,
  Footer,
  FooterTab,
  Header
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

  navigateToSketch = () => {
    this.props.navigation.navigate('Sketch')
  }

  navToDisplayGame = () => {
    this.props.navigation.navigate('Display', {
      id: this.props.gameId,
      game_rounds: this.props.gameRounds
    })
  }

  render () {
    return (
      <Container>
        <Header />
        <Container>
          <SentenceInput handleTyping={this.handleTyping} />
        </Container>
        <SketchDisplay
          drawing={this.props.gameRounds[this.props.gameRounds.length - 1].drawing}
        />
        <Footer>
          <FooterTab>
            <EndGameButton
              roundInfo={{sentence: this.state.sentence, game_id: this.props.gameId}}
              navToDisplayGame={this.navToDisplayGame}
            />
            <NextPlayerButton
              roundInfo={{sentence: this.state.sentence, game_id: this.props.gameId}}
              navigateToNext={this.navigateToSketch}
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
