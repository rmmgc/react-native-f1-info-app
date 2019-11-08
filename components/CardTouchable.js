import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


import { DisplayText, DisplayBold } from './AppText'
import Card from './Card'
import { AppLayout } from '../constants'

/**
 * <CardTouchable />
 */

class CardTouchable extends React.Component {

  constructor(props) {
    super(props)

    // this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(e, id) {
    console.log("POZVAN IN CARD TOUCHABLE!")
    this.props.onPress(e, id)
  }

  render() {
    return (
      <TouchableOpacity 
        style={{...styles.baseMargin, ...this.props.style}}
        onPress={this.onClickHandler.bind(this, 100)}
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
            <View style={styles.headerTitle}>
              <DisplayBold style={{textTransform: 'uppercase'}}>{this.props.cardTitle}</DisplayBold>
            </View>
          </View>
          <View style={{...styles.description, marginLeft: AppLayout.baseMargin + this.props.iconSize - 4}}>
            <DisplayText style={styles.descriptionText}>{this.props.cardDescription}</DisplayText>
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
  },
  headerTitle: {
    marginLeft: AppLayout.baseMargin
  },
  description: {
    marginTop: AppLayout.baseMargin/2
  },
  descriptionText: {
    fontSize: 12
  }
})


/**
 * Exports
 */

export default CardTouchable
