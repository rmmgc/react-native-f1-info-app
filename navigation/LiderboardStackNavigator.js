import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import { DisplayText } from '../components/AppText'

import Liderboards from '../screens/Liderboards'
import Driver from '../screens/Driver'
import Team from '../screens/Team'

import { AppColors } from '../constants'

const ScheduleStack = createStackNavigator(
  {
    Liderboards: {
      screen: Liderboards,
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
    initialRouteName: 'Liderboards',
    cardStyle: {backgroundColor: AppColors.backgroundMain},
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: AppColors.backgroundRed
      },
      headerTintColor: AppColors.white
    }
  }
)

export default ScheduleStack
