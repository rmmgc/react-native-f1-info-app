import React from 'react'
import { 
  View, 
  StyleSheet, 
  Image, StatusBar 
} from 'react-native'


/**
 * Custom Components
 */

import { DisplayText } from './AppText'


/**
 * Constants
 */

import { AppColors, AppLayout } from '../constants'

const STATUS_BAR_HEIGHT = StatusBar.currentHeight


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
            <DisplayText>{this.props.screenTitle}</DisplayText>
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
    height: 56 + STATUS_BAR_HEIGHT,
    flexDirection: 'row',
    backgroundColor: AppColors.backgroundRed
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: AppLayout.baseMargin,
    paddingTop: STATUS_BAR_HEIGHT
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
