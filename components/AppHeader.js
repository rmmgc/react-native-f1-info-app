import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { theme } from '../constants'

/**
 * <AppHeader />
 */

class AppHeader extends React.Component {

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.headerInfo}>
            <Image
              style={styles.appLogo}
              source={require('../assets/f1_logo_contrast.png')}
              resizeMode='contain'
            />
            <Text style={styles.screenTitle}>Homepage</Text>
          </View>
        </View>
      </View>
    )
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: theme.colors.redCandy,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: theme.layoutSizes.baseMargin,
    paddingTop: theme.layoutSizes.headerTopPadding
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row'
  },
  appLogo: {
    width: 62,
    marginRight: 10
  },
  screenTitle: {
    color: theme.colors.whiteFlash,
    fontSize: 14,
    fontFamily: 'f1-display-font'
  }
})


/**
 * Exports
 */

export default AppHeader
