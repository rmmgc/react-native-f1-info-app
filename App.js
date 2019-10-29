import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import AppContainer from './navigation/MainTabNavigator'
import { AppColors } from './constants'

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'f1-display': require('./assets/fonts/f1/f1_display_font.ttf'),
      'f1-display-bold': require('./assets/fonts/f1/f1_display_font_bold.ttf'),
      'open-sans': require('./assets/fonts/opensans/OpenSans-Regular.ttf'),
      'open-sans-semibold': require('./assets/fonts/opensans/OpenSans-SemiBold.ttf'),
      ...Ionicons.font
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
    backgroundColor: AppColors.gunmetal
  }
})
