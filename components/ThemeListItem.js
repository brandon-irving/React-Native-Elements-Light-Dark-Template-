import React from 'react'
import ThemeStyles from '../constants/ThemeStyles'
import { ListItem } from 'react-native-elements'
import { useThemeState } from '../context/useThemeState'

export const ThemeListItem = (props) => {
    const [backgroundColor] = useThemeState(ThemeStyles.lightCardBackground, ThemeStyles.darkSecondary)
    const containerStyle={...props.containerStyle, backgroundColor}
    return <ListItem {...props} containerStyle={containerStyle} />
}
