import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { TabBar } from 'react-native-animated-nav-tab-bar'
import { Ionicons } from '@expo/vector-icons'

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
              <Ionicons 
                name="md-home" 
                size={24} 
                color="#FFFFFF" 
              />
            )
          case 'News':
            return (
              <Ionicons 
                name="ios-paper" 
                size={24} 
                color="#FFFFFF" 
              />
            )
          case 'Liderboards':
            return (
              <Ionicons 
                name="md-trophy" 
                size={24} 
                color="#FFFFFF" 
              />
            )
          case 'Tracks':
            return (
              <Ionicons 
                name="md-calendar" 
                size={24} 
                color="#FFFFFF" 
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
