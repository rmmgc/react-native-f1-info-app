import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { theme } from '../constants'
import AppHeader from '../components/AppHeader'
import Card from '../components/Card'


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
    margin: theme.layoutSizes.baseMargin
  }
})


/**
 * Exports
 */

export default Home
