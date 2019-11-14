import React from 'react'
import { ScrollView, StyleSheet, Dimensions } from 'react-native'


/**
 * Constants
 */

import { AppLayout } from '../constants'



/**
 * <Carousel />
 */

class Carousel extends React.Component {

  render() {
    const { style, ...props } = this.props

    return (
      <ScrollView 
        style={{...styles.container, ...style}}
        contentContainerStyle={styles.innerContainer}
        horizontal
        decelerationRate={0}
        snapToAlignment={"center"}
        showsHorizontalScrollIndicator={false}
        {...props}
      >
        {props.children}
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
