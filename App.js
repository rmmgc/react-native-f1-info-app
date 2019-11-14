import React from 'react';
import { StyleSheet, View, Animated } from 'react-native'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { Ionicons } from '@expo/vector-icons'
import AppContainer from './navigation/TabNavigatorMain'


/**
 * Custom Components
 */

import AppActivityIndicator from './components/AppActivityIndicator'


/**
 * Constants and Utils
 */
import { AppColors } from './constants'
import { fontsImporter } from './utils/importFonts'
import { imagesImporter } from './utils/importImages'


export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
    hideLoadingScreen: false,
  }

  /* Hold API data */
  driverStandings = []
  constructorStandings = []
  seasonRaces = []

  /* Animated values */
  fadeOut = new Animated.Value(1)
  fadeIn = new Animated.Value(0)

  async componentDidMount() {
    try {
      await Font.loadAsync({
        ...fontsImporter,
        ...Ionicons.font
      })
      await Asset.loadAsync(imagesImporter)
  
      /* Get data from ergast API */
      let response1 = await fetch('https://ergast.com/api/f1/current/driverStandings.json')
      let response2 = await fetch('https://ergast.com/api/f1/2019/constructorStandings.json')
      let response3 = await fetch('https://ergast.com/api/f1/current.json')
  
      response1 = await response1.json()
      response2 = await response2.json()
      response3 = await response3.json()

      this.driverStandings = response1.MRData.StandingsTable.StandingsLists[0].DriverStandings
      this.constructorStandings = response2.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      this.seasonRaces = response3.MRData.RaceTable.Races
      
      /* Update state */
      this.setState({ isLoadingComplete: true })
  
      /* Start animation when Component is mounted */
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
                driverStandings: this.driverStandings,
                constructorStandings: this.constructorStandings,
                seasonRaces: this.seasonRaces
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
