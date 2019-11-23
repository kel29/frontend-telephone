import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import GameDisplay from '../components/GameDisplay'

class PastGamesScreen extends PureComponent {
  state = {
    games: [
      {
        id: 0,
        game_rounds: [
        {sentence: ''}
      ]}
    ]
  }

  fetchGames = () => {
    fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(games => this.setState({games}))
  }

  componentDidMount () {
    this.fetchGames()
  }

  parseGames = () => {
    return this.state.games.map(game => {
      if (game.user_id === this.props.navigation.getParam('userId')) {
        return <GameDisplay game={game} key={game.id} handleViewGame={this.handleViewGame} />
      }
    })
  }

  handleViewGame = (game) => {
    this.props.navigation.navigate('Display', game)
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
