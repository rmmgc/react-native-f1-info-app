import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from './screens/Home'
import News from './screens/News'
import Liderboard from './screens/Liderboard'

const AppNavigator = createBottomTabNavigator({
  Home,
  News,
  Liderboard
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer
