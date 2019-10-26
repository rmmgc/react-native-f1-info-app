import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { DisplayText } from './AppText'
import { AppColors, AppLayout } from '../constants'

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
            <DisplayText>Home</DisplayText>
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
    backgroundColor: AppColors.redCandy
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: AppLayout.screenMargin,
    paddingTop: AppLayout.heraderTopPadding
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  appLogo: {
    width: 62,
    marginRight: 10
  }
})


/**
 * Exports
 */

export default AppHeader
