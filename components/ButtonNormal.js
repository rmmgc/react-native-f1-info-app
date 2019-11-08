import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


import { DisplayBold } from './AppText'
import { AppColors } from '../constants'

const gradientColors = [AppColors.strongRed, AppColors.lightRed]

/**
 * <ButtonNormal />
 */

class ButtonNormal extends React.Component {

  render() {
    const { style } = this.props

    return (
      <TouchableOpacity {...this.props} >
        <LinearGradient 
          style={[styles.button, style]}
          colors={gradientColors}
        >
          <DisplayBold>{this.props.name}</DisplayBold>
        </LinearGradient>
      </TouchableOpacity>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: AppColors.backgroundMain
  }
})


/**
 * Exports
 */

export default ButtonNormal
