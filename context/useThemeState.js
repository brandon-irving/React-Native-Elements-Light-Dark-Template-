import {useState, useEffect} from 'react'
import { UseGlobalContext } from './globalContext'

/**
 * useThemeState: This hook reads the global state: darkMode and lightMode
 * and returns the desired result
 *
 * @param {any} lightMode - The expected response, if light mode is enabled. Can be anything
 * @param {any} darkMode - The expected response, if dark mode is enabled. Can be anything
 * @return {any} Will return whatever you passed in
 *
 * @example
 * const [themeTitleColor] = useThemeState = ({color: 'white'}, {color: 'black'})
 * const [ThemeComponent] = useThemeState = (<Light/>, <Dark />)
 * const [themeText] = useThemeState = ('This is light', 'This is Dark')
 *  
 */
export const useThemeState = (lightMode, darkMode) => {
    const [themeState, setThemeState] = useState(lightMode)
    const { state } = UseGlobalContext()
    useEffect(() => {
      state.darkMode && setThemeState(darkMode)
        !state.darkMode && setThemeState(lightMode)
    }, [state.darkMode])
  return [themeState]
}
