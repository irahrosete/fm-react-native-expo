import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const Box = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container, styles.bgCyan]}>
        <Text style={styles.text}>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.container, styles.bgBlue]}>
        <Text style={styles.text}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.container, styles.bgMagenta]}>
        <Text style={styles.text}>Magenta: #d33682</Text>
      </View>
      <View style={[styles.container, styles.bgOrange]}>
        <Text style={styles.text}>Orange: #cb4b16</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    marginVertical: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  bgCyan: {
    backgroundColor: '#2aa198',
  },
  bgBlue: {
    backgroundColor: '#268bd2',
  },
  bgMagenta: {
    backgroundColor: '#d33682',
  },
  bgOrange: {
    backgroundColor: '#cb4b16',
  },
})

export default Box
