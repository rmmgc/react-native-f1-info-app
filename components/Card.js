import React from 'react'
import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { DisplayBold } from './AppText'
import { AppColors, AppLayout } from '../constants'

/**
 * <Card />
 */

class Card extends React.Component {

  renderCardHeader() {
    return (    
      <View style={styles.cardHeader}>
        <DisplayBold style={{lineHeight: 18, textTransform: 'uppercase'}}>
          {this.props.title}
        </DisplayBold>
      </View>
    )
  }

  renderCardWithGradient() {
    const { title, gradientColors } = this.props

    return (
      <LinearGradient 
        style={{ ...styles.card, ...this.props.wrapperStyle }}
        colors={gradientColors}
      >
        {title && this.renderCardHeader()}
        <View style={{ ...styles.content, ...this.props.contentStyle }}>
          {this.props.children}
        </View>
      </LinearGradient>
    )
  }

  renderCard() {
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

  render() {
    const { gradientColors } = this.props

    return gradientColors ? this.renderCardWithGradient() : this.renderCard()
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: AppLayout.cardPadding,
    backgroundColor: AppColors.cardBackground,
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
