import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TabBar, TabView } from 'react-native-tab-view'

import AppHeader from '../components/AppHeader'
import { DisplayText } from '../components/AppText'
import Drivers from './Liderboards/Drivers'
import Constructors from './Liderboards/Constructors'

import { AppLayout, AppColors } from '../constants'


/**
 * <Liderboards />
 */

class Liderboards extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      routes: [
        {key: 'drivers', title: 'Drivers'},
        {key: 'constructors', title: 'Constructors'}
      ]
    }

    this.changeTabIndexHandler = this.changeTabIndexHandler.bind(this)
    this.renderScene = this.renderScene.bind(this)
  }

  changeTabIndexHandler(index) {
    this.setState({ index })
  }

  renderTabBar(props) {
    return (
      <TabBar
        {...props}
        style={styles.tabBar}
        renderLabel={({ route, focused, color }) => (
          <DisplayText style={{ fontSize: 12 }}>
            {route.title}
          </DisplayText>
        )}
        pressColor="transparent"
        indicatorStyle={{ backgroundColor: AppColors.grayBlue }}
      >

      </TabBar>
    )
  }

  renderScene({ route }) {
    switch (route.key) {
      case 'drivers':
        return <Drivers navigation={this.props.navigation} />;
      case 'constructors':
        return <Constructors navigation={this.props.navigation} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        <AppHeader screenTitle="Liderboards" />
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.changeTabIndexHandler}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </View>
    )
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
    flex: 1
  },
  baseMargin: {
    flex: 1,
    marginHorizontal: AppLayout.screenMargin
  },
  tabBar: {
    backgroundColor: AppColors.backgroundMain
  }
})


/**
 * Exports
 */

export default Liderboards
