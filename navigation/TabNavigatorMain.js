import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { TabBar } from 'react-native-animated-nav-tab-bar'

import Home from '../screens/Home'
import News from '../screens/News'
import Tracks from '../screens/Tracks'
import Liderboards from '../screens/Liderboards'

import { AppColors } from '../constants'

const AppNavigator = createBottomTabNavigator(
  {
    Home,
    Tracks,
    Liderboards,
    News
  }, 
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state

        switch (routeName) {
          case 'Home': 
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={require('../assets/icons/toolbar_free_practice.png')}
                resizeMode='contain'
              />
            )
          case 'News':
            return (
              <Image
                style={{ width: 22, height: 22 }}
                source={require('../assets/icons/toolbar_news.png')}
                resizeMode='contain'
              />
            )
          case 'Liderboards':
            return (
              <Image
                style={{ width: 22, height: 22 }}
                source={require('../assets/icons/toolbar_leaderboards.png')}
                resizeMode='contain'
              />
            )
          case 'Tracks':
            return (
              <Image
                style={{ width: 22, height: 22 }}
                source={require('../assets/icons/toolbar_race.png')}
                resizeMode='contain'
              />
            )
        }
      }
    }),
    tabBarComponent: props => {
      return (
        <TabBar
          activeColors={AppColors.whiteFlash}
          activeTabBackgrounds={AppColors.grayBlue}
          tabBarBackground={AppColors.tabNavActiveItem}
          {...props}
        />
      )
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
