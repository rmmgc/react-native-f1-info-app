import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { BaseText } from './AppText'
import { AppColors } from '../constants'

/**
 * <ButtonNormal />
 */

class ButtonNormal extends React.Component {

  render() {
    const { style } = this.props

    return (
      <TouchableOpacity {...this.props} style={[styles.button, style]}>
        <BaseText>{this.props.title}</BaseText>
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
    backgroundColor: AppColors.gunmetal,
    borderWidth: 1,
    borderColor: AppColors.redPhantone
  }
})


/**
 * Exports
 */

export default ButtonNormal
