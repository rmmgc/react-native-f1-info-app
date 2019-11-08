import React from 'react'
import { 
  StyleSheet, 
  ActivityIndicator, 
  Animated 
} from 'react-native'


/**
 * Constants
 * 
 * Import App Theme colors from constants
 */

import { AppColors } from '../constants'


/**
 * <AppActivityIndicator />
 */

class AppActivityIndicator extends React.Component {

  /**
   * Animated value
   * 
   * Take animated value from props and 
   * save it in fadeOut property
   */

  fadeOut = this.props.fadeOut


  render() {
    return (
      <Animated.View
        style={{
          ...styles.loadingScreen,
          opacity: this.fadeOut,
          transform: [
            {perspective: 1000},
            {scale: this.fadeOut.interpolate({
              inputRange: [0, 1],
              outputRange: [6, 1]
            })}
          ],
          ...this.props.style
        }}
      >
        <ActivityIndicator size="large" color={AppColors.white} />
      </Animated.View>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: AppColors.backgroundMain,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999
  }
})


/**
 * Exports
 */

export default AppActivityIndicator
