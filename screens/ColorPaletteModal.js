import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const ColorPaletteModal = () => {
  const [name, setName] = useState('')
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>This is the colour palette modal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  container: {
    padding: 5,
    backgroundColor: 'white',
    flex: 1,
  },
})
export default ColorPaletteModal
