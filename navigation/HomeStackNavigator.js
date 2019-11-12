import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import { DisplayText } from '../components/AppText'

import Home from '../screens/Home'
import Driver from '../screens/Driver'
import Team from '../screens/Team'

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
