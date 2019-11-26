import React, { Component } from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

export default class HomeScreen extends Component {

  startGame = () => {
    this.props.navigation.navigate('StartGame')
  }

  showPastGames = () => {
    this.props.navigation.navigate('PastGames')
  }

  showRules = () => {
    this.props.navigation.navigate('Rules')
  }
  
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Welcome to Telephone!</Text>
            <Button title='Start New Game' onPress={this.startGame} />
            <Button title='Past Games' onPress={this.showPastGames} />
            <Button title='Rules' onPress={this.showRules} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Welcome!'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  }
})
