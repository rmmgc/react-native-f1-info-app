import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

import Drivers from '../screens/Liderboards/Drivers'
import Constructors from '../screens/Liderboards/Constructors'

const TabNavigatorLiderboards = createMaterialTopTabNavigator(
  {
    Drivers,
    Constructors
  },
  {
    initialRouteName: 'Drivers',
    swipeEnabled: true
  }
)

export {
  TabNavigatorLiderboards
}
