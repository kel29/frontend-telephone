import React, { PureComponent } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import GameDisplay from '../components/GameDisplay'

class PastGamesScreen extends PureComponent {
  state = {
    games: ['initial data just to show something', 'here is another for example']
  }

  parseGames = () => {
    return this.state.games.map(game => <GameDisplay title={game} />)
  }

  render () {
    return (
      <ScrollView>
        {this.parseGames()}
      </ScrollView>
    )
  }
}

PastGamesScreen.navigationOptions = {
  title: 'Past Games'
}

export default PastGamesScreen
