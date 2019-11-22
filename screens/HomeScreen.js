import * as WebBrowser from 'expo-web-browser'
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
            <DevelopmentModeNotice />
  
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
  header: null
}

function DevelopmentModeNotice () {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    )

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    )
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    )
  }
}

function handleLearnMorePress () {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
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
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  navigationFilename: {
    marginTop: 5
  }
})
