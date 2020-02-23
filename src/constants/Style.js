import { Dimensions, StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#f2f2f2'
  },
  buttonText: {
    fontFamily: 'patrick-hand-sc'
  },
  successBtn: {
    fontWeight: 'bold',
    color: '#5cb85c'
  },
  dangerBtn: {
    fontWeight: 'bold',
    color: '#d9534f'
  },
  warningBtn: {
    fontWeight: 'bold',
    color: '#f0ad4e'
  },
  primaryBtn: {
    fontWeight: 'bold',
    color: '#007aff'
  },
  secondaryBtn: {
    fontWeight: 'bold',
    color: '#62B1F6'
  },
  headerTitleStyle: {
    fontFamily: 'covered-by-your-grace',
    fontSize: 24,
    color: '#007aff'
  },
  marginStyle: {
    backgroundColor: '#1a1a1a'
  },
  sketchContainer: {
    width: Dimensions.get('window').width - 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    margin: 10,
    padding: 10
  }
})

export default Styles
