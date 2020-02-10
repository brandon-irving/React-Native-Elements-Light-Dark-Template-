import React, { useEffect, useState } from 'react'
import AppNavigator from './navigation/AppNavigator'
import { withTheme } from 'react-native-elements'
import { UseGlobalContext } from './context/globalContext'
import { darkTheme, lightTheme } from './constants/ThemeStyles'

/**
 * This is where your theme is controlled
 */
const ThemedApp = props => {
  const {
    state: { darkMode },
  } = UseGlobalContext()
  useEffect(() => {
    darkMode && props.updateTheme(darkTheme)
    !darkMode && props.updateTheme(lightTheme)
  }, [darkMode])
  return <AppNavigator />
}
export default withTheme(ThemedApp)
