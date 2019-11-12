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
    await Font.loadAsync({
      ...fontsImporter,
      ...Ionicons.font
    })
    await Asset.loadAsync(imagesImporter)

    Promise.all([
      fetch('https://ergast.com/api/f1/current/driverStandings.json'),
      fetch('https://ergast.com/api/f1/2019/constructorStandings.json'),
      fetch('https://ergast.com/api/f1/current.json')
    ])
    .then( async ([response1, response2, response3]) => {
      response1 = await response1.json()
      response2 = await response2.json()
      response3 = await response3.json()
      return [response1, response2, response3]
    })
    .then(([jsonResponse1, jsonResponse2, jsonResponse3]) => {
      this.setState({ 
        driverStandings: jsonResponse1.MRData.StandingsTable.StandingsLists[0].DriverStandings,
        constructorStandings: jsonResponse2.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,
        seasonRaces: jsonResponse3.MRData.RaceTable.Races,
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
      ])
      .start(() => {
        this.setState({ hideLoadingScreen: true })
      })
    })
    .catch(err => {
        console.log(err)
    })
  }
  
  render() {
    return (
      <View style={styles.screen}>
        {!this.state.hideLoadingScreen &&  <AppActivityIndicator fadeOut={this.fadeOut} /> }

        {this.state.isLoadingComplete && 
          <Animated.View style={{flex: 1, opacity: this.fadeIn}}>
            <AppContainer
              screenProps={{
                driversStandings: this.state.driverStandings,
                constructorsStandings: this.state.constructorStandings,
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
