import React, { PureComponent } from 'react'
import { Container, Content, List } from 'native-base'
import { connect } from 'react-redux'
import { API_ROOT } from '../services/api'
import GameList from '../components/GameList'
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
      return <GameList game={game} key={game.game_id} handleViewGame={this.viewGame} />
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
  headerTitleStyle: { ...Styles.headerTitleStyle },
  headerStyle: { ...Styles.marginStyle }
}

const mapStateToProps = state => {
  return { userId: state.userId }
}

export default connect(mapStateToProps)(PastGamesScreen)
