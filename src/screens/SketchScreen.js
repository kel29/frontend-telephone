import React, { PureComponent } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import {
  Button,
  Container,
  Footer,
  FooterTab,
  Icon,
  Text
} from 'native-base'
import SentenceDisplay from '../components/SentenceDisplay'
import { Sketch } from 'expo-pixi'
import NextPlayerButton from '../components/NextPlayerButton'
import { connect } from 'react-redux'
import Styles from '../constants/Style'

class SketchScreen extends PureComponent {
  state = {
    sketch: { uri: null },
    strokeColor: '#000',
    strokeWidth: 10
  }

  snapshotSketch = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync()

    this.setState({
      sketch: { uri },
      strokeWidth: 10,
      strokeColor: '#000'
    })
  }

  navToInBetween = () => {
    this.props.navigation.navigate('InBetween', {screen: 'Sentence'})
  }

  render () {
    return (
      <Container style={Styles.backgroundColor}>
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
        <Footer style={Styles.marginStyle}>
          <FooterTab>
            <NextPlayerButton
              roundInfo={{drawing: this.state.sketch.uri, game_id: this.props.gameId}}
              navToInBetween={this.navToInBetween}
            />
            <Button onPress={() => this.sketch.undo()}>
              <Icon style={Styles.warningBtn} name='ios-undo' />
              <Text style={Styles.warningBtn}>Undo</Text>
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

SketchScreen.navigationOptions = {
  headerStyle: { ...Styles.marginStyle }
}

export default connect(mapStateToProps)(SketchScreen)

const styles = StyleSheet.create({
  sketchInput: {
    ...Styles.sketchContainer,
    height: Dimensions.get('window').width,
    backgroundColor: '#FFF',
  },
  sentenceDisplay: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 20
  }
})
