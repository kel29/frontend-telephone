const initialState = {
  gameId: 0,
  gameRounds: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ROUND':
      return {
        ...state,
        gameRounds: state.gameRounds.push(action.round)
      }
    case 'SET_GAME_ID':
      return {
        ...state,
        gameId: action.gameId
      }
    case 'CLEAR_CURRENT_GAME':
      return initialState
    default:
      return state
  }
}

export default reducer
