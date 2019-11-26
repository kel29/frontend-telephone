import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

const HomeScreen = (props) => {
  const startGame = () => {
    props.navigation.navigate('StartGame')
  }

  const showPastGames = () => {
    props.navigation.navigate('PastGames')
  }

  const showRules = () => {
    props.navigation.navigate('Rules')
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Welcome to Telephone!</Text>
          <Button title='Start New Game' onPress={startGame} />
          <Button title='Past Games' onPress={showPastGames} />
          <Button title='Rules' onPress={showRules} />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

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
  }
})
