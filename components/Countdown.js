import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { DisplayBold, DisplayText } from './AppText'
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
    color: AppColors.redCandy
  },
  counterLabel: {
    fontSize: 8, 
    textTransform: 'uppercase'
  }
})


/**
 * Exports
 */

export default Countdown
