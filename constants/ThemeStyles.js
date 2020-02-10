

const ThemeStyles = {
// Light Theme
  primary: '#1597E7',
  secondary: '#ffffff',
  textColor: '#000000',
  lightIconColor: '#ffffff',
  lightCardBackground: '#ffffff',
  lightBackgroundColor: '#ffffff',
  backgroundColor: '#ffffff',

// Dark Theme
  darkPrimary: '#272626',
  darkSecondary: '#666363',
  darkTextColor: '#ffffff',
  darkBackgroundColor: '#000000',
  darkAccent: '#c5c4c4',
  darkIconColor: '#ffffff',

// Misc
  tabIconDefault: '#ccc',
  tabIconSelected: '#2f95dc',
  spacingSml: 10,
  spacingMed: 20,
  spacingLrg: 40,
  fontSml: 10,
  fontMed: 20,
  fontLrg: 40,
}

export const darkTheme = {
  Input: {
    inputContainerStyle: {
       backgroundColor: 'white', padding: 10 
    }
  },
  Header: {
    backgroundColor: ThemeStyles.darkPrimary,
    containerStyle: {
      borderBottomColor: 'transparent',
    },
  },

  Text: {
    style: {
      color: ThemeStyles.darkTextColor,
    },
  },

  colors: {
    primary: ThemeStyles.darkPrimary,
  },

  Icon: {
    iconStyle: {
      color: ThemeStyles.darkIconColor
    }
  },

  Button: {
    buttonStyle: {
      backgroundColor: ThemeStyles.darkPrimary,
      borderColor: ThemeStyles.darkPrimary,
      height: 50,
      width: 160
    }
  },

  Card: {
    imageStyle:{
      width: 200,
      height: 200,
    },
    titleStyle: {
      color: ThemeStyles.darkTextColor,

    },
    containerStyle: {
      borderColor: 'transparent',
      backgroundColor: ThemeStyles.darkSecondary,
    },

  }

 
}

export const lightTheme = {
  Header: {
    backgroundColor: ThemeStyles.primary,
    containerStyle: {
      borderBottomColor: 'transparent',
    },
  },

  Text: {
    style: {
      color: 'black',
    },
  },

  colors: {
    primary: ThemeStyles.textColor,
  },

  Button: {
    buttonStyle: {
      backgroundColor: ThemeStyles.primary,
      borderColor: ThemeStyles.primary,
      height: 50,
      width: 160
    }
  },

  Icon: {
    iconStyle: {
      color: ThemeStyles.lightIconColor,
    }
  },
  Card: {
    imageStyle:{
      width: 200,
      height: 200,
    },
    containerStyle: {
      backgroundColor: ThemeStyles.lightCardBackground
    }
  }

}
export default ThemeStyles
