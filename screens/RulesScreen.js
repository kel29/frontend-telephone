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
    <Container>
      <Content>
        <Text style={styles.overview}>
          Welcome to Telephone! Similar to the classic childrens
          game, we're banking on a premise of hilarity, miscomunication
          and confusion. It will be a grand ole time!
        </Text>
        <List>
          <ListItem itemDivider>
            <Text>Step One</Text>
          </ListItem>
          <ListItem>
            <Text>
              Player one writes a descriptive sentence. Once done, they submit their sentence and pass the phone to the next player.
            </Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step Two</Text>
          </ListItem>
          <ListItem>
            <Text>
              Player two attempts to sketch an image representation of that sentence. Once done, they hit submit and pass the phone to the next player.
            </Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step Three</Text>
          </ListItem>
          <ListItem>
            <Text>
              Player three, having only seen player two's sketch, writes a sentence to describe the image. Submit, pass.
            </Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step Four - </Text>
            <Icon name='ios-infinite' />
          </ListItem>
          <ListItem>
            <Text>
              Repeat steps two and three until you run out of players. Then hit end game to view each player's contribution!
            </Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

RulesScreen.navigationOptions = {
  title: 'Rules'
}

const styles = StyleSheet.create({
  overview: {
    textAlign: 'justify',
    padding: 15,
    fontSize: 17,
    lineHeight: 24
  }
})

export default RulesScreen
