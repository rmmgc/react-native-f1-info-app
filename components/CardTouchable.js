import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


/**
 * Custom Components
 */

import { DisplayText, DisplayBold } from './AppText'
import Card from './Card'


/**
 * Constants
 */

import { AppLayout } from '../constants'


/**
 * <CardTouchable />
 */

class CardTouchable extends React.Component {

  onPressHandler(rounteName) {
    console.log(rounteName)
    console.log("POZVAN IN CARD TOUCHABLE!")
    this.props.onPress(rounteName)
  }

  render() {
    return (
      <TouchableOpacity 
        style={{ ...styles.baseMargin, ...this.props.style }}
        onPress={this.onPressHandler.bind(this, this.props.routeName)}
      >
        <Card>
          <View style={styles.header}>
            <View>
              <Ionicons 
                name={this.props.iconName} 
                size={this.props.iconSize} 
                color={this.props.iconColor} 
              />
            </View>
            <View style={{ marginLeft: AppLayout.baseMargin }}>
              <DisplayBold style={{textTransform: 'uppercase'}}>{this.props.cardTitle}</DisplayBold>
            </View>
          </View>
          <View style={{
            marginTop: AppLayout.baseMargin/2, 
            marginLeft: AppLayout.baseMargin + this.props.iconSize - 4
          }}>
            <DisplayText style={{ fontSize: 12 }}>{this.props.cardDescription}</DisplayText>
          </View>
        </Card>
      </TouchableOpacity>
    ) 
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  baseMargin: {
    flex: 1,
    marginHorizontal: AppLayout.baseMargin
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center'
  }
})


/**
 * Exports
 */

export default CardTouchable
