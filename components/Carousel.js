import React from 'react'
import { ScrollView, StyleSheet, Dimensions } from 'react-native'

/**
 * Custom Components
 */

import { DisplayBold, DisplayText } from './AppText'
import Card from './Card'


/**
 * Constants
 */

import { AppColors, AppLayout } from '../constants'

const SCREEN_WIDTH = Dimensions.get('window').width


/**
 * <Carousel />
 */

class Carousel extends React.Component {

  render() {
    return (
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.innerContainer}
        horizontal
        decelerationRate={0}
        // snapToInterval={width - (80 - AppLayout.baseMargin)}
        snapToAlignment={"center"}
        showsHorizontalScrollIndicator={false}
        {...this.props}
      >
        {this.props.children}
      </ScrollView>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginHorizontal: AppLayout.baseMargin/2, 
    paddingRight: AppLayout.baseMargin
  }
})


/**
 * Exports
 */

export default Carousel
