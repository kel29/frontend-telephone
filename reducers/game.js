const initialState = {
  games: [
    {
      id: 0,
      game_rounds: [{ sentence: '' }]
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ROUND':
      return state.game.game_rounds.push(action.gameRound)
    default:
      return state
  }
}
