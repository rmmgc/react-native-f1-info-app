import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import { DisplayText } from '../components/AppText'

import Schedule from '../screens/Schedule'
import Race from '../screens/Race'

import { AppColors } from '../constants'

const ScheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      }),
    },
    Race: {
      screen: Race,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <DisplayText>{navigation.state.params.raceName}</DisplayText>
      }),
    },
  },
  {
    initialRouteName: 'Schedule',
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
