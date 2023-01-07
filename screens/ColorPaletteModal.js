import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ColorPaletteModal = () => {
  const [name, setName] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of the palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Palette name"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 10,
  },
})
export default ColorPaletteModal
