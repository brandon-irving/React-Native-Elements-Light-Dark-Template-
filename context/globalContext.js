import React, { useReducer, useContext, createContext } from 'react'


const GlobalContext = createContext()

const initialState = {
  darkMode: false,
}

const ACTIONS = {
  SET_DARK_MODE: 'SET_DARK_MODE',
}

function globalReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.darkMode,
      }
    default:
      return state
  }
}

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  const setDarkMode = darkMode => dispatch({ type: ACTIONS.SET_DARK_MODE, darkMode })
  return <GlobalContext.Provider value={{ state, setDarkMode }}>{children}</GlobalContext.Provider>
}

function UseGlobalContext() {
  return useContext(GlobalContext)
}

export { GlobalContext, UseGlobalContext, ACTIONS }
