import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

function RulesScreen () {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.overview}>
        Welcome to Telephone! Similar to the classic childrens
        game, we're banking on a premise of hilarity, miscomunication
        and confusion. It will be a grand ole time!
      </Text>
      <Text style={styles.tldr}>
        TLDR: Player one writes a sentence, player two attempts
        to draw it. Player three writes a sentence to describe
        player two's drawing, and the game continues to alternate
        between describing and drawing until you choose to end it.
        Then, you get to review everyone's contributions and have a
        lovely laugh over evolution of what just happened.
      </Text>
      <Text style={styles.overview}>
        The first player will enter a sentence. It should be descriptive,
        but not insane. Think 'The cow jummped over the spoon', not
        'The black and white spotted Holstein Friesian cow, who had always
        dreamed of a career as a ballerina, took a running leap over the
        Spoonbridge and Cherry sculpture.' I mean, you can always go with
        something crazy, but I can't promise your friends will ever want to
        play with you again.
      </Text>
      <Text style={styles.overview}>
        Next, player two will do their very best to sketch out an
        image representation of that sentence player one so kindly
        shared. Once done, make sure to hit the next button before
        passing the phone to the next player. They will only see the
        sketch just created, and will have to describe it in a sentence.
        Once done and submitted, they should pass the phone on to the
        next player, and the game will continue to cycle between drawing
        and describing until you run out of friends. At that point, hit
        the end game button and have a laugh reviewing the story that
        has unfolded.
      </Text>

    </ScrollView>
  )
}

RulesScreen.navigationOptions = {
  title: 'Rules'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  tldr: {
    flex: 1,
    textAlign: 'justify',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 17,
    lineHeight: 24
  },
  overview: {
    flex: 1,
    textAlign: 'justify',
    paddingTop: 10,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24
  }
})

export default RulesScreen
