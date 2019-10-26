import React from 'react'
import { View, StyleSheet } from 'react-native'

import { DisplayText, DisplayBold } from './AppText'
import { AppColors, AppLayout } from '../constants'

/**
 * <Card />
 */

class Card extends React.Component {

  renderCardHeader() {
    return (    
      <View style={styles.cardHeader}>
        <DisplayBold>
          {this.props.title}
        </DisplayBold>
      </View>
    )
  }

  render() {
    const { title } = this.props

    return (
      <View style={{ ...styles.card, ...this.props.wrapperStyle }}>
        {title && this.renderCardHeader()}
        <View style={{ ...styles.content, ...this.props.contentStyle }}>
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
    marginTop: AppLayout.screenMargin,
    overflow: 'hidden'
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: AppLayout.screenMargin
  },
  content: {
    flex: 1
  }
})


/**
 * Exports
 */

export default Card
