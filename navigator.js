import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { TabBar } from 'react-native-animated-nav-tab-bar'

import Home from './screens/Home'
import News from './screens/News'
import Liderboard from './screens/Liderboard'
import Tracks from './screens/Tracks'

import { AppColors, AppFonts } from './constants'


const AppNavigator = createBottomTabNavigator(
  {
    Home,
    Tracks,
    Liderboard,
    News
  }, 
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              style={{ width: 24, height: 24 }}
              source={require('./assets/icons/toolbar_free_practice.png')}
              resizeMode='contain'
            />
          )
        } 
        else if (routeName === 'News') {
          return (
            <Image
              style={{ width: 22, height: 22 }}
              source={require('./assets/icons/toolbar_news.png')}
              resizeMode='contain'
            />
          )
        }
        else if (routeName === 'Liderboard') {
          return (
            <Image
              style={{ width: 22, height: 22 }}
              source={require('./assets/icons/toolbar_leaderboards.png')}
              resizeMode='contain'
            />
          )
        }
        else if (routeName === 'Tracks') {
          return (
            <Image
              style={{ width: 22, height: 22 }}
              source={require('./assets/icons/toolbar_race.png')}
              resizeMode='contain'
            />
          )
        }
      },
    }),
    tabBarComponent: props => {
      return (
        <TabBar
          activeColors={AppColors.whiteFlash}
          activeTabBackgrounds={AppColors.gunmetal}
          tabBarBackground={AppColors.grayBlue}
          {...props}
        />
      )
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
