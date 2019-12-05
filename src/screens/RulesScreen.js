import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Icon
} from 'native-base'

function RulesScreen () {
  return (
    <Container style={styles.container}>
      <Content>
        <Text style={styles.overview}>
          Welcome to Telephone! Similar to the classic childrens
          game, we're banking on a premise of hilarity, miscomunication
          and confusion. It will be a grand ole time!
        </Text>
        <List>
          <ListItem itemDivider style={styles.listDivider}>
            <Text style={styles.steps}>Step one</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.rules}>
              Player one has 200 characters to write a descriptive sentence. Once done, they submit their sentence and pass the phone to the next player.
            </Text>
          </ListItem>
          <ListItem itemDivider style={styles.listDivider}>
            <Text style={styles.steps}>Step two</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.rules}>
              Player two attempts to sketch an image representation of that sentence. Once done, they hit submit and pass the phone to the next player.
            </Text>
          </ListItem>
          <ListItem itemDivider style={styles.listDivider}>
            <Text style={styles.steps}>Step three</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.rules}>
              Player three, having only seen player two's sketch, writes a sentence to describe the image. Submit, pass.
            </Text>
          </ListItem>
          <ListItem itemDivider style={styles.listDivider}>
            <Text style={styles.steps}>Step four - </Text>
            <Icon name='ios-infinite' />
          </ListItem>
          <ListItem>
            <Text style={styles.rules}>
              Repeat steps two and three until you run out of players. Then hit end game to view each player's contribution!
            </Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

RulesScreen.navigationOptions = {
  title: 'Rules',
  headerTitleStyle: {
    fontFamily: 'covered-by-your-grace',
    fontSize: 24,
    color: '#FEFEFE'
  },
  headerStyle: { backgroundColor: '#030203' }
}

const styles = StyleSheet.create({
  overview: {
    padding: 15,
    fontSize: 28,
    fontFamily: 'patrick-hand-sc'
  },
  steps: {
    fontFamily: 'covered-by-your-grace',
    fontSize: 28
  },
  rules: {
    fontSize: 18,
    fontFamily: 'patrick-hand-sc'
  },
  listDivider: {
    backgroundColor: '#1AE0D3'
  },
  container: {
    backgroundColor: '#F0F5F5'
  }
})

export default RulesScreen
