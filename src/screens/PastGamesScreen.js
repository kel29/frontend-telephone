import React, { PureComponent } from 'react'
import GameDisplay from '../components/GameDisplay'
import { Container, Content, List } from 'native-base'
import { API_ROOT } from '../services/api'
import { connect } from 'react-redux'


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
      <Container>
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
  title: 'Past Games'
}

const mapStateToProps = state => {
  return { userId: state.userId }
}

export default connect(mapStateToProps)(PastGamesScreen)
