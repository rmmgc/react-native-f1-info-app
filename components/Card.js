import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { CardTitle } from './AppText'
import { AppColors, AppLayout } from '../constants'

/**
 * <Card />
 */

class Card extends React.Component {

  renderCardHeader() {
    return (    
      <View style={styles.cardHeader}>
        <CardTitle>
          {this.props.title}
        </CardTitle>
      </View>
    )
  }

  render() {
    const { title } = this.props

    return (
      <View style={styles.card}>
        {title && this.renderCardHeader()}
        <View style={{ ...styles.content, ...this.props.style }}>
          {this.props.children}
        </View>
      </View>
    ) 
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: AppLayout.cardPadding,
    backgroundColor: AppColors.grayBlue,
    borderRadius: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14
  },
  content: {
    flex: 1
  }
})


/**
 * Exports
 */

export default Card
