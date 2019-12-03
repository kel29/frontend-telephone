import React, { PureComponent } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import {
  Button,
  Container,
  Footer,
  FooterTab,
  Header,
  Icon,
  Text
} from 'native-base'
import SentenceDisplay from '../components/SentenceDisplay'
import { Sketch } from 'expo-pixi'
import EndGameButton from '../components/EndGameButton'
import NextPlayerButton from '../components/NextPlayerButton'
import { connect } from 'react-redux'

class SketchScreen extends PureComponent {
  state = {
    sketch: { uri: null },
    strokeColor: '#000',
    strokeWidth: 14
  }

  snapshotSketch = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync()

    this.setState({
      sketch: { uri },
      strokeWidth: 14,
      strokeColor: '#000'
    })
  }

  navToInBetween = () => {
    this.props.navigation.navigate('InBetween', {screen: 'Sentence'})
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
        <Container style={styles.sentenceDisplay}>
          <SentenceDisplay sentence={this.props.gameRounds[this.props.gameRounds.length - 1].sentence} />
        </Container>
        <Sketch
          ref={ref => (this.sketch = ref)}
          style={styles.sketchInput}
          strokeColor={this.state.strokeColor}
          strokeWidth={this.state.strokeWidth}
          strokeAlpha={1}
          onChange={this.snapshotSketch}
        />
        <Footer>
          <FooterTab>
            <EndGameButton
              roundInfo={{drawing: this.state.sketch.uri, game_id: this.props.gameId}}
              navToDisplayGame={this.navToDisplayGame}
            />
            <NextPlayerButton
              roundInfo={{drawing: this.state.sketch.uri, game_id: this.props.gameId}}
              navToInBetween={this.navToInBetween}
            />
            <Button onPress={() => this.sketch.undo()}>
              <Icon name='ios-undo' />
              <Text>Undo</Text> 
            </Button>
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

export default connect(mapStateToProps)(SketchScreen)

const styles = StyleSheet.create({
  sketchInput: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'steelblue',
    margin: 10,
    padding: 10
  },
  sentenceDisplay: {
    padding: 10,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
})
