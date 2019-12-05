import React, { PureComponent } from 'react'
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { Container, Footer, FooterTab } from 'native-base'
import SentenceInput from '../components/SentenceInput'
import SketchDisplay from '../components/SketchDisplay'
import { connect } from 'react-redux'
import EndGameButton from '../components/EndGameButton'
import NextPlayerButton from '../components/NextPlayerButton'
import Styles from '../constants/Style'

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
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
          <Container style={styles.container}>
            <SentenceInput handleTyping={this.handleTyping} />
            <View style={styles.sketch}>
              <SketchDisplay
                drawing={this.props.gameRounds[this.props.gameRounds.length - 1].drawing}
              />
            </View>
          </Container>
        </TouchableWithoutFeedback>
        <Footer style={Styles.footerColor}>
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
    backgroundColor: '#F0F5F5',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  sketch: {
    height: Dimensions.get('window').width + 40
  }
})
