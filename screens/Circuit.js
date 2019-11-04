import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

/**
 * <Circuit />
 */

class Circuit extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#343434'}}>
        <Text>OVO JE TEXT. ID STAZE JE: {JSON.stringify(navigation.getParam('trackId', 'NO-ID'))}</Text>
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

export default Circuit
