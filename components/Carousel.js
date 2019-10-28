import React from 'react'
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  Image, 
  Dimensions 
} from 'react-native'

import { DisplayBold, DisplayText } from './AppText'
import Card from './Card'
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
        // snapToInterval={width - (80 - AppLayout.screenMargin)}
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
    marginHorizontal: AppLayout.screenMargin/2, 
    paddingRight: AppLayout.screenMargin
  }
})


/**
 * Exports
 */

export default Carousel
