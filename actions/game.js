export const addRound = (gameId, gameRound) => {
  return {
    type: 'ADD_ROUND',
    gameRound,
    gameId
  }
}
