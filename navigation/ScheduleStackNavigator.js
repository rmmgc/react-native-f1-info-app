import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import { DisplayText } from '../components/AppText'

import Schedule from '../screens/Schedule'
import Circuit from '../screens/Circuit'

import { AppColors } from '../constants'

const ScheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      }),
    },
    Circuit: {
      screen: Circuit,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <DisplayText>{navigation.state.params.circuitName}</DisplayText>
      }),
    },
  },
  {
    initialRouteName: 'Schedule',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: AppColors.redCandy
      },
      headerTintColor: AppColors.white
    }
  }
)

export default ScheduleStack
