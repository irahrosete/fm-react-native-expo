import React from 'react'
import { TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native'
import ColorPalette from '../screens/ColorPalette'

const PalettePreview = ({ handlePress, colorPalette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        style={styles.text}
        data={ColorPalette.colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => <Text>{item.colorName}</Text>}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default PalettePreview
