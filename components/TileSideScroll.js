import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

 const TileSideScroll = (props) => {
     const { scrollTitleRight,scrollTitleLeft, cardArray } = props
     
    return (
        <View style={styles.horizontalScrollContainer}>
        <View style={styles.titleContainer}>
    <Text style={styles.horizontalScrollTitleLeft}>{scrollTitleLeft}</Text>
    <Text style={styles.horizontalScrollTitRight}>{scrollTitleRight}</Text>
        </View>
        <ScrollView horizontal>
          {cardArray.map((card, i) => (
            <Card
            {...props}
            key={i}
            title={card.title}
            headerText={card.headerText}
            bodyText={card.bodyText}
            imageUri={card.imageUri}
            />
          ))}
        </ScrollView>
        </View>
    )
}
export default TileSideScroll

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    horizontalScrollTitleLeft:{
      fontWeight: 'bold',
      marginLeft: 20
    },
    horizontalScrollTitRight:{
        fontWeight: 'bold',
        marginRight: 20
      },
    horizontalScrollContainer: {
      flexDirection: 'column',
      paddingBottom: 30,
      paddingTop: 10
    }
  })