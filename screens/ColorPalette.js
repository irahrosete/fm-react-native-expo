import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import ColorBox from '../components/ColorBox'

const ColorPalette = ({ route }) => {
  const { paletteName, colors } = route.params
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default ColorPalette
