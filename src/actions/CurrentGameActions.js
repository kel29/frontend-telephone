export const addRound = round => {
  return {
    type: 'ADD_ROUND',
    round
  }
}

export const clearCurrentGame = () => {
  return { type: 'CLEAR_CURRENT_GAME' }
}

export const setGameId = gameId => {
  return {
    type: 'SET_GAME_ID',
    gameId
  }
}
