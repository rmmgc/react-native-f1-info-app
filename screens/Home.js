import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppHeader from '../components/AppHeader'
import { Text } from '../components/AppText'
import Card from '../components/Card'

import { AppLayout } from '../constants'

/**
 * <Home />
 */

class Home extends React.Component {

  render() {
    return (
      <View style={styles.screen}>
        <AppHeader />
        <View style={styles.mainContent}>
          <Card title="Next Race">
            <Text>Ovo je neki probni tekst!</Text>
          </Card>
        </View>
      </View>
    );
  }

}


/**
 * StyleSheet
 */

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  mainContent: {
    margin: AppLayout.screenMargin
  }
})


/**
 * Exports
 */

export default Home
