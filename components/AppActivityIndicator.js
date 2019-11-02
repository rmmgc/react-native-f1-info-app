import React from 'react'
import { StyleSheet, View, ActivityIndicator, Animated } from 'react-native'

import { AppColors } from '../constants'

/**
 * <AppActivityIndicator />
 */

class AppActivityIndicator extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      fadeOut: this.props.fadeOut
    }
  }

  render() {
    return (
      <Animated.View
        style={{
          ...styles.loadingScrren,
          opacity: this.state.fadeOut,
          transform: [
            {perspective: 1000},
            {scale: this.state.fadeOut.interpolate({
              inputRange: [0, 1],
              outputRange: [6, 1]
            })}
          ],
          ...this.props.style
        }}
      >
        <ActivityIndicator size="large" color={AppColors.whiteFlash} />
      </Animated.View>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  loadingScrren: {
    flex: 1,
    backgroundColor: AppColors.gunmetal,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 999
  }
})


/**
 * Exports
 */

export default AppActivityIndicator
