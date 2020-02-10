import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Header, Button, Text, Card, CheckBox } from 'react-native-elements'
import ThemeView from '../components/ThemeView'
import { UseGlobalContext } from '../context/globalContext'
import { img, list } from '../constants/MockData'
import { ThemeListItem } from '../components/ThemeListItem'


export default function HomeScreen(props) {
  const { setDarkMode, state: {darkMode}} = UseGlobalContext()
  return (
    <ThemeView>
      <CheckBox
  center
  title='Toggle Theme'
  iconRight
  iconType='material'
  uncheckedIcon='visibility'
  checkedIcon='visibility-off'
  checkedColor='black'
  checked={darkMode}
  onPress={() => setDarkMode(!darkMode)}

/>
      <ScrollView>
      <Card
  title='HELLO WORLD'
  image={{uri: img}}

  >
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    buttonStyle={{width: '100%',borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
<View style={styles.buttonGrid}>
<View style={styles.buttonRow}>
     <Button title="Toggle Theme" />
     <Button title="Toggle Theme" />
     </View>
     <View style={styles.buttonRow}>
     <Button title="Toggle Theme" />
     <Button title="Toggle Theme" />
     </View>
</View>
<View style={styles.listContainer}>
  <Text style={styles.ListTitle}>List</Text>
{
    list.map((l, i) => (
      <ThemeListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
  }
</View>
    
      </ScrollView>
   
    </ThemeView>
  )
}

HomeScreen.navigationOptions = {
  header: <Header

  centerComponent={{ text: 'headerTitle', style:{color: 'white'} }}
  rightComponent={{
    icon: 'repeat',
    containerStyle: {
      borderRadius: 10,
    },
    underlayColor: 'gray',
  }}
   />,
}

const styles = StyleSheet.create({
  ListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  listContainer:{
    padding: 10
  },  
  buttonRow:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
},
  buttonGrid: {
    marginTop: 20,
    height: 150
  },

})
