import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Button from './Box'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>
          Here are some boxes of different colours
        </Text>
        <Button />
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
