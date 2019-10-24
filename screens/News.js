import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


/**
 * <News />
 */

class News extends React.Component {

  render() {
    console.log("RENDER POKRENUT!")
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello from NEWS screen!</Text>
      </View>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({

})


/**
 * Exports
 */

export default News
