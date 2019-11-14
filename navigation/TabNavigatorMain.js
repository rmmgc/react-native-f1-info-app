/**
 * APP main navigation
 */

import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { TabBar } from 'react-native-animated-nav-tab-bar'
import { Ionicons } from '@expo/vector-icons'


/**
 * Stack Navigators and Screen Components
 */

import HomeStack from './HomeStackNavigator'
import ScheduleStack from './ScheduleStackNavigator'
import LiderboardsStack from './LiderboardStackNavigator'
import News from '../screens/News'


/**
 * Constants
 */

import { AppColors } from '../constants'


const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Schedule: ScheduleStack,
    Liderboards: LiderboardsStack,
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
          case 'Schedule':
            return (
              <Ionicons 
                name="md-calendar" 
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
          case 'News':
            return (
              <Ionicons 
                name="ios-paper" 
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
          activeColors={AppColors.white}
          activeTabBackgrounds={AppColors.grayBlue}
          tabBarBackground={AppColors.lightGrayBlue}
          {...props}
        />
      )
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
