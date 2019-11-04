import React from 'react';
import { StyleSheet, View, Animated } from 'react-native'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { Ionicons } from '@expo/vector-icons'

import AppContainer from './navigation/TabNavigatorMain'
import AppActivityIndicator from './components/AppActivityIndicator'
import { AppColors } from './constants'
import { fontsImporter } from './utils/importFonts'
import { imagesImporter } from './utils/importImages'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoadingComplete: false,
      hideLoadingScreen: false,
    }
  }

  fadeOut = new Animated.Value(1)
  fadeIn = new Animated.Value(0)

  async componentDidMount() {
    await Font.loadAsync({
      ...fontsImporter,
      ...Ionicons.font
    })
    await Asset.loadAsync(imagesImporter)

    this.setState({ isLoadingComplete: true })

    Animated.parallel([
      Animated.timing(this.fadeOut, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }
      ),
      Animated.timing(this.fadeIn, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true
        }
      ),
    ])
    .start(() => {
      this.setState({ hideLoadingScreen: true })
    })
  }
  
  render() {
    return (
      <View style={styles.screen}>
        {!this.state.hideLoadingScreen &&  <AppActivityIndicator fadeOut={this.fadeOut} /> }

        {this.state.isLoadingComplete && 
          <Animated.View style={{flex: 1, opacity: this.fadeIn}}>
            <AppContainer />
          </Animated.View>
        }
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
