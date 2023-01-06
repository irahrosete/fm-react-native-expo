import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import ColorBox from './components/ColorBox'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Here are some boxes of different colours
        </Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default App
