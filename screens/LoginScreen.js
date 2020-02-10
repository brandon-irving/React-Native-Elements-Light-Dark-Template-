import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import ThemeView from '../components/ThemeView'
import ThemeStyles from '../constants/ThemeStyles'


export default function LoginScreen() {
  
  return (
    <ThemeView style={styles.container}>
      <View style={styles.inputContainer2}>
      <Input
        autoFocus
          inputContainerStyle={{ borderBottomColor: 'black', }}
          placeholder="Username"
          rightIcon={<Icon name="user" size={24} color="black" />}
        />
      </View>
      <View style={styles.inputContainer2}>
      <Input
        autoFocus
          inputContainerStyle={{ borderBottomColor: 'black', }}
          placeholder="Email"
          rightIcon={<Icon name="envelope" size={24} color="black" />}
        />
      </View>
      <Button title="login"/>
    </ThemeView>

  )
}

LoginScreen.navigationOptions = {
  header: <Header />,
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer2: {
    width: 300,
    marginBottom: 40,
  },
  inputContainer: {
    borderBottomColor: 'transparent',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor: ThemeStyles.primary
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  signUpText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: ThemeStyles.primary
  },
})
