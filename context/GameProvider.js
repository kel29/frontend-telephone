import React, { Component } from 'react'
import GameContext from './GameContext'

class GameProvider extends Component {
  state = {
    userId: 1 // TODO: reset this to 0
  }

  render () {
    return (
      <GameContext.Provider
        value={{
          userId: this.state.userId,
          setUser: (userId) => this.setState({ userId: userId })
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    )
  }
}

export default GameProvider
