import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, List } from 'native-base'
import { API_ROOT } from '../services/api'
import { connect } from 'react-redux'
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
    fetch(`${API_ROOT}games`)
    .then(resp => resp.json())
    .then(games => this.setState({games}))
  }

  componentDidMount () {
    this.fetchGames()
  }

  parseGames = () => {
    return this.state.games.map(game => {
      if (game.user_id === this.props.userId) {
        return <GameDisplay game={game} key={game.id} handleViewGame={this.viewGame} />
      }
    })
  }

  viewGame = (game) => {
    this.props.navigation.navigate('Display', game)
  }

  render () {
    return (
      <Container style={styles.container} >
        <Content>
          <List>
            {this.parseGames()}
          </List>
        </Content>
      </Container>
    )
  }
}

PastGamesScreen.navigationOptions = {
  title: 'Past Games',
  headerTitleStyle: {
    fontFamily: 'covered-by-your-grace',
    fontSize: 24,
    color: '#FEFEFE'
  },
  headerStyle: { backgroundColor: '#030203' }
}

const mapStateToProps = state => {
  return { userId: state.userId }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F5F5'
  }
})

export default connect(mapStateToProps)(PastGamesScreen)
