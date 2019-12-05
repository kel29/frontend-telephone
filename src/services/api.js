import { AsyncStorage } from 'react-native'

export const API_ROOT = 'http://10.137.3.252:3000/'

export const getToken = async () => {
  const token = await AsyncStorage.getItem('TOKEN')
  return token
}

export const POST_HEADERS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}
