import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { theme } from '../constants'

/**
 * <Card />
 */

class Card extends React.Component {

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.cardTitle}>
          <Text style={styles.titleText}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.content}>
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
    padding: theme.layoutSizes.cardPadding,
    backgroundColor: theme.colors.grayBlue,
    borderRadius: 12
  },
  cardTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'f1-display-font',
    color: theme.colors.whiteFlash
  },
  content: {
    marginTop: 14
  }
})


/**
 * Exports
 */

export default Card
