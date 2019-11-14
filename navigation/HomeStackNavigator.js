import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'


/**
 * Custom Components
 */

import { DisplayText } from '../components/AppText'


/**
 * Screen Components
 */

import Home from '../screens/Home'
import Driver from '../screens/Driver'
import Team from '../screens/Team'


/**
 * Constants
 */

import { AppColors } from '../constants'


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      }),
    },
    Driver: {
      screen: Driver,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <DisplayText>{navigation.state.params.driverData.Driver.familyName}</DisplayText>
      }),
    },
    Team: {
      screen: Team,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <DisplayText>{navigation.state.params.constructorData.Constructor.name}</DisplayText>
      }),
    }
  },
  {
    initialRouteName: 'Home',
    cardStyle: { backgroundColor: AppColors.backgroundMain },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: AppColors.backgroundRed
      },
      headerTintColor: AppColors.white
    }
  }
)

export default HomeStack
