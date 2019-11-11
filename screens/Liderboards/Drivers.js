import React from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'

import AppActivityIndicator from '../../components/AppActivityIndicator'
import Card from '../../components/Card'
import { DisplayBold, DisplayText } from '../../components/AppText'
import { AppLayout, AppColors } from '../../constants'


/**
 * <Drivers />
 */

class Drivers extends React.Component {

  state = {
    driverStandings: [],
    isAnimationOver: false,
    fadeOut: new Animated.Value(1),
    fadeIn: new Animated.Value(0)
  }

  async componentDidMount() {
    try {
      let response = await fetch('https://ergast.com/api/f1/current/driverStandings.json')
      response = await response.json()

      // Extract data from response
      response = response.MRData.StandingsTable.StandingsLists[0].DriverStandings

      this.setState({ driverStandings: response })

      Animated.parallel([
        Animated.timing(this.state.fadeOut, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
          }
        ),
        Animated.timing(this.state.fadeIn, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
          }
        ),
      ]).start(() => {
        this.setState({ isAnimationOver: true })
      })
    } 
    catch (error) {
      console.error(error);
    }
  }

  onDriverPressHandler(driverData) {
    this.props.navigation.navigate('Driver', {
      driverData,
    })
  }

  renderDriversList() {
    return this.state.driverStandings.map((driver, index) => {
      const highlightColor = index < 3 ? AppColors.strongRed : AppColors.lightGray
      const itemKey = driver.position
      const isLastItem = this.state.driverStandings.length - 1 === index ? true : false

      return(
        <TouchableOpacity
          key={itemKey}
          onPress={this.onDriverPressHandler.bind(this, driver)}
        >
          <Card 
            wrapperStyle={{ ...styles.baseMargin, marginBottom: isLastItem ? 14 : 0  }} 
            contentStyle={styles.cardContent}
          >
            <View 
              style={{ ...styles.cardBackground, backgroundColor: highlightColor }}
            ></View>

            <View style={styles.standing}>
              <DisplayBold style={{fontSize: 26}}>
                {driver.position}
              </DisplayBold>
            </View>
            <View style={{flex: 1}}>
              <DisplayBold>
                {driver.Driver.givenName} {driver.Driver.familyName.toUpperCase()}
              </DisplayBold>
              <DisplayText style={{fontSize: 12, marginTop: 6}}>
                {driver.Constructors[0].name}
              </DisplayText>
            </View>
            <View style={{marginLeft: 14}}>
              <DisplayBold 
                style={{fontSize: 18, color: AppColors.strongRed, marginRight: 10}}
              >
                {driver.points}
              </DisplayBold>
            </View>
          </Card>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {!this.state.isAnimationOver && <AppActivityIndicator fadeOut={this.state.fadeOut} /> }

        {this.state.driverStandings.length > 0 && 
          <Animated.ScrollView style={{ ...styles.screen, opacity: this.state.fadeIn }} >
            {this.renderDriversList()}
          </Animated.ScrollView>
        }
      </View>
    )
  }
}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  baseMargin: {
    flex: 1,
    marginHorizontal: AppLayout.baseMargin,
    borderRadius: 100
  },
  standing: {
    width: 40, 
    marginRight: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },  
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardBackground: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: -50,
    left: -30,
    transform: [
      {rotate: '20deg'}
    ]
  }
})


/**
 * Exports
 */

export default Drivers
