import React, { PureComponent } from 'react'
import { Container, Content, List } from 'native-base'
import { connect } from 'react-redux'
import { API_ROOT } from '../services/api'
import GameDisplay from '../components/GameDisplay'
import Styles from '../constants/Style'

class PastGamesScreen extends PureComponent {
  state = {
    games: [
      {
        game_id: 0,
        game_rounds: [
        {sentence: ''}
      ]}
    ]
  }

  fetchGames = () => {
    fetch(`${API_ROOT}users/${this.props.userId}`)
    .then(resp => resp.json())
    .then(userInfo => this.setState({games: userInfo.games}))
  }

  componentDidMount () {
    this.fetchGames()
  }

  parseGames = () => {
    return this.state.games.map(game => {
      return <GameDisplay game={game} key={game.game_id} handleViewGame={this.viewGame} />
    })
  }

  viewGame = (game) => {
    this.props.navigation.navigate('Display', game)
  }

  render () {
    return (
      <Container style={Styles.backgroundColor} >
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
    color: '#1AE0D3'
  },
  headerStyle: { backgroundColor: '#030203' }
}

const mapStateToProps = state => {
  return { userId: state.userId }
}

export default connect(mapStateToProps)(PastGamesScreen)
