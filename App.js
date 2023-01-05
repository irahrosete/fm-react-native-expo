import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.yellow]}>
        <Text style={styles.text}>Hello, My Dragon 🐉!</Text>
        <Text style={styles.text}>🥜</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a4c4e0',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 2,
  },
  text: {
    fontSize: 40,
  },
  yellow: {
    backgroundColor: '#FDFD96',
  },
})

export default App
