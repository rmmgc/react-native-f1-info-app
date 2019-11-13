import React from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'


/**
 * Custom Components
 */

import Card from '../../components/Card'
import { DisplayBold, DisplayText } from '../../components/AppText'


/**
 * Constants
 */

import { AppLayout, AppColors } from '../../constants'


/**
 * <Drivers />
 */

class Drivers extends React.Component {

  // Animated value for screen animation
  screenAnimatedValue = new Animated.Value(0)

  // Save drivers data passed via props
  driverStandings = this.props.driverStandings

  componentDidMount() {
    // Start animation when Component is mounted
    Animated.timing(this.screenAnimatedValue, 
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }
    ).start()
  }


  /**
   * Event Handlers
   */

  // Navigate to Driver screen
  onDriverPressHandler(driverData) {
    this.props.navigation.navigate('Driver', {
      driverData,
    })
  }


  /**
   * Render Functions
   */

  // Render drivers list
  renderDriversList() {
    return this.driverStandings.map((driver, index) => {
      const highlightColor = index < 3 ? AppColors.strongRed : AppColors.lightGrayBlue
      const itemKey = driver.position
      const isLastItem = this.driverStandings.length - 1 === index ? true : false

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
        {this.driverStandings.length > 0 && 
          <Animated.ScrollView 
            style={{ 
              ...styles.screen, 
              opacity: this.screenAnimatedValue,
              transform: [
                {perspective: 1000},
                {translateY: this.screenAnimatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0]
                })}
              ]
            }} 
          >
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
