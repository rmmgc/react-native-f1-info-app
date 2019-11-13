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
      driverStandings: [],
      constructorStandings: [],
      seasonRaces: []
    }
  }

  fadeOut = new Animated.Value(1)
  fadeIn = new Animated.Value(0)

  async componentDidMount() {
    try {
      await Font.loadAsync({
        ...fontsImporter,
        ...Ionicons.font
      })
      await Asset.loadAsync(imagesImporter)
  
      let response1 = await fetch('https://ergast.com/api/f1/current/driverStandings.json')
      let response2 = await fetch('https://ergast.com/api/f1/2019/constructorStandings.json')
      let response3 = await fetch('https://ergast.com/api/f1/current.json')
  
      response1 = await response1.json()
      response2 = await response2.json()
      response3 = await response3.json()
  
      this.setState({ 
        driverStandings: response1.MRData.StandingsTable.StandingsLists[0].DriverStandings,
        constructorStandings: response2.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,
        seasonRaces: response3.MRData.RaceTable.Races,
        isLoadingComplete: true
      })
  
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
      ]).start(() => {
        this.setState({ hideLoadingScreen: true })
      })
    }
    catch(error) {
      console.log(`Error occured: ${error}`)
    }
  }
  
  render() {
    return (
      <View style={styles.screen}>
        {!this.state.hideLoadingScreen &&  <AppActivityIndicator fadeOut={this.fadeOut} /> }

        {this.state.isLoadingComplete && 
          <Animated.View style={{flex: 1, opacity: this.fadeIn}}>
            <AppContainer
              screenProps={{
                driverStandings: this.state.driverStandings,
                constructorStandings: this.state.constructorStandings,
                seasonRaces: this.state.seasonRaces
              }}
            />
          </Animated.View>
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.backgroundMain
  }
})
