import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import TabBarIcon from '../components/TabBarIcon'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ThemeBottomNav from '../components/ThemeBottomNav'

const TabBarComponent = props => <ThemeBottomNav {...props} />

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
})

function handleStackCreation(title, screen){
  return createStackNavigator(
    {
      [title]: screen,
    },
    config
  )
}

const HomeStack = handleStackCreation('Home', HomeScreen)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

HomeStack.path = ''

const LoginStack = handleStackCreation('Login', LoginScreen)

LoginStack.navigationOptions = {
  tabBarLabel: 'Login ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
}

LoginStack.path = ''

const SettingsStack = handleStackCreation('Settings', SettingsScreen)

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
}

SettingsStack.path = ''

const tabNavigator = createBottomTabNavigator(
  {
    LoginStack,
    HomeStack,
    SettingsStack,
  },
  {
    tabBarComponent: props => <TabBarComponent {...props} />,
  }
)

tabNavigator.path = ''

export default tabNavigator
