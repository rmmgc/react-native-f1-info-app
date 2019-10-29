import React from 'react';
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { Ionicons } from '@expo/vector-icons'

import AppContainer from './navigation/MainTabNavigator'
import AppActivityIndicator from './components/AppActivityIndicator'
import { AppColors } from './constants'
import { fontsImporter } from './utils/importFonts'
import { imagesImporter } from './utils/importImages'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoadingComplete: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      ...fontsImporter,
      ...Ionicons.font
    })

    await Asset.loadAsync(imagesImporter)

    setTimeout(() => {
      this.setState({ isLoadingComplete: true });
    }, 30000)
  }
  
  render() {

    if (!this.state.isLoadingComplete) {
      return (
        <AppActivityIndicator />
      )
    }
    else {
      return (
        <View style={styles.screen}>
          <AppContainer />
        </View>
      )
    }
  }

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.gunmetal
  }
})
