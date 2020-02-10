import React from 'react'
import { View } from 'react-native'
import { useThemeState } from '../context/useThemeState'
import ThemeStyles from '../constants/ThemeStyles'

export default function ThemeView(props) {
const { lightBackgroundColor, darkBackgroundColor} = ThemeStyles
  const [backgroundColor] = useThemeState(lightBackgroundColor , darkBackgroundColor)
  const backgroundColorOverride = props.style && props.style.backgroundColor
  return <View style={{ ...props.style, flex: 1, backgroundColor: backgroundColorOverride || backgroundColor }}>{props.children}</View>
}
