import React from 'react'
import { View, StyleSheet } from 'react-native'


/**
 * Custom Components
 */

import { DisplayBold, DisplayText } from './AppText'


/**
 * Constants
 */

import { AppColors } from '../constants'


/**
 * <Countdown />
 */

class Countdown extends React.Component {

  render() {
    return (
      <View style={styles.countdown}>
        <View style={styles.counter}>
          <DisplayBold style={styles.counterNumber}>{this.props.days}</DisplayBold>
          <DisplayText style={styles.counterLabel}>days</DisplayText>
        </View>
        <View style={styles.counter}>
          <DisplayBold style={styles.counterNumber}>{this.props.hours}</DisplayBold>
          <DisplayText style={styles.counterLabel}>hours</DisplayText>
        </View>
        <View style={styles.counter}>
          <DisplayBold style={styles.counterNumber}>{this.props.minutes}</DisplayBold>
          <DisplayText style={styles.counterLabel}>minutes</DisplayText>
        </View>
      </View>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  countdown: {
    flex: 1, 
    flexDirection: 'row'
  },
  counter: {
    alignItems: 'center',
    marginRight: 14
  },
  counterNumber: {
    fontSize: 36, 
    color: AppColors.strongRed
  },
  counterLabel: {
    fontSize: 10, 
    textTransform: 'uppercase'
  }
})


/**
 * Exports
 */

export default Countdown
