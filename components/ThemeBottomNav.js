import React from 'react'
import { BottomTabBar } from 'react-navigation-tabs'
import ThemeStyles from '../constants/ThemeStyles'
import { useThemeState } from '../context/useThemeState'

const ThemeBottomNav = props => {
  const { darkBackgroundColor, darkAccent } = ThemeStyles
 const [backgroundColor] = useThemeState(ThemeStyles.backgroundColor, darkBackgroundColor)
  return <BottomTabBar {...props} style={{ backgroundColor, borderTopColor: darkAccent }} />
}
export default ThemeBottomNav
