import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import { AppColors } from '../constants'

/**
 * <AppActivityIndicator />
 */

class AppActivityIndicator extends React.Component {

  render() {
    return (
      <View style={styles.activityScreen}>
        <ActivityIndicator size="large" color={AppColors.redCandy} />
      </View>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  activityScreen: {
    flex: 1,
    backgroundColor: AppColors.gunmetal,
    justifyContent: 'center', 
    alignItems: 'center'
  }
})


/**
 * Exports
 */

export default AppActivityIndicator
