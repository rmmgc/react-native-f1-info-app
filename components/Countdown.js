import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { DisplayText, BaseText } from './AppText'
import { AppColors } from '../constants'

/**
 * <Countdown />
 */

class Countdown extends React.Component {

  render() {
    return (
      <View style={styles.countdown}>
        <View style={styles.counter}>
          <DisplayText style={styles.counterNumber}>{this.props.days}</DisplayText>
          <BaseText style={styles.counterLabel}>days</BaseText>
        </View>
        <View style={styles.counter}>
          <DisplayText style={styles.counterNumber}>{this.props.hours}</DisplayText>
          <BaseText style={styles.counterLabel}>hours</BaseText>
        </View>
        <View style={styles.counter}>
          <DisplayText style={styles.counterNumber}>{this.props.minutes}</DisplayText>
          <BaseText style={styles.counterLabel}>minutes</BaseText>
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
