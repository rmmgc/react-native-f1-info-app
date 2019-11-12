import React from 'react'
import { View, StyleSheet } from 'react-native'
import dayjs from 'dayjs'


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

  constructor(props) {
    super(props)

    this.endDate = props.endDate
    this.difference = this.endDate.diff(dayjs())

    this.state = {
      days: this.addZero(this.calcTime('days')),
      hours: this.addZero(this.calcTime('hours')),
      minutes: this.addZero(this.calcTime('minutes'))
    }
  }

  addZero(value) {
    return value < 10 ? `0${value}` : `${value}`
  }

  calcTime(unit) {
    switch(unit) {
      case 'days': 
        return Math.floor(this.difference / (1000 * 60 * 60 * 24))
      case 'hours': 
        return Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      case 'minutes': 
        return Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60))
      default:
        return null
    }
  }

  componentDidMount() {
    let countdownTime = setInterval(() => {
      this.difference = this.endDate.diff(dayjs())
      if(this.difference > 0) {
        this.setState({
          days: this.addZero(this.calcTime('days')),
          hours: this.addZero(this.calcTime('hours')),
          minutes: this.addZero(this.calcTime('minutes'))
        })
      }
      else 
        clearInterval(countdownTime)
    }, 60000)
  }

  render() {
    return (
      <View style={styles.countdown}>
        <View style={styles.counter}>
          <DisplayBold style={styles.counterNumber}>{this.state.days}</DisplayBold>
          <DisplayText style={styles.counterLabel}>days</DisplayText>
        </View>
        <View style={styles.counter}>
          <DisplayBold style={styles.counterNumber}>{this.state.hours}</DisplayBold>
          <DisplayText style={styles.counterLabel}>hours</DisplayText>
        </View>
        <View style={styles.counter}>
          <DisplayBold style={styles.counterNumber}>{this.state.minutes}</DisplayBold>
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
