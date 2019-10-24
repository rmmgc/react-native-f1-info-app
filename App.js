import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import * as Font from 'expo-font'

import AppContainer from './navigator'
import { theme } from './constants'

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'f1-display-font': require('./assets/fonts/f1_display_font.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  
  render() {
    return (
      <View style={styles.screen}>
        {this.state.fontLoaded ? <AppContainer /> : <Text>Opss, we cant load APP</Text>}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.gunmetal
  }
})
