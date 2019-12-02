const initialState = {
  userId: 0,
  gameId: 0,
  gameRounds: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.userId
      }
    case 'SET_GAME_ID':
      return {
        ...state,
        gameId: action.gameId
      }
    case 'ADD_ROUND':
      return {
        ...state,
        gameRounds: state.gameRounds.concat(action.round)
      }
    case 'CLEAR_CURRENT_GAME':
      return {
        ...initialState,
        userId: state.userId
      }
    default:
      return state
  }
}

export default reducer
