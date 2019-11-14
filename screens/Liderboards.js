import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TabBar, TabView } from 'react-native-tab-view'


/**
 * Custom Components
 */

import AppHeader from '../components/AppHeader'
import { DisplayText } from '../components/AppText'


/**
 * Screen Components
 */

import Drivers from './Liderboards/Drivers'
import Constructors from './Liderboards/Constructors'


/**
 * Constants
 */
import { AppColors } from '../constants'


/**
 * <Liderboards />
 */

class Liderboards extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      routes: [
        {
          key: 'drivers', 
          title: 'Drivers'
        },
        {
          key: 'constructors', 
          title: 'Constructors'
        }
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
        renderLabel={({ route }) => (
          <DisplayText style={{ fontSize: 12 }}>
            {route.title}
          </DisplayText>
        )}
        pressColor="transparent"
        indicatorStyle={{backgroundColor: AppColors.grayBlue}}
      ></TabBar>
    )
  }

  renderScene({ route }) {
    const { screenProps } = this.props

    switch (route.key) {
      case 'drivers':
        return (
          <Drivers 
            driverStandings={screenProps.driverStandings} 
            navigation={this.props.navigation} 
          />
        )
      case 'constructors':
        return (
          <Constructors 
            constructorStandings={screenProps.constructorStandings} 
            navigation={this.props.navigation} 
          />
        )
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
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
  tabBar: {
    backgroundColor: AppColors.backgroundMain
  }
})


/**
 * Exports
 */

export default Liderboards
