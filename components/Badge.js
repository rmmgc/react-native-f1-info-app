import React from 'react'
import { View, StyleSheet } from 'react-native'


/**
 * Custom Components
 */

import { DisplayText } from './AppText'


/**
 * Constants
 */

import { AppColors, AppLayout } from '../constants'


/**
 * <Badge />
 */

class Badge extends React.Component {

  render() {
    return (
      <View>
        <View style={{
          ...styles.badge, 
          ...this.props.wrapperStyle}
        }>
          <DisplayText style={{
            ...styles.badgeText,
            ...this.props.textStyle
          }}>
            {this.props.data}
          </DisplayText>
        </View>
      </View>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  badge: { 
    paddingVertical: 6, 
    paddingHorizontal: AppLayout.basePadding, 
    borderRadius: 50,
    backgroundColor: AppColors.backgroundMain
  },
  badgeText: {
    fontSize: 12
  }
})


/**
 * Exports
 */

export default Badge
