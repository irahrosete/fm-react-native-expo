import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  }

  return (
    <View>
      <View style={[styles.container, boxColor]}>
        <Text style={styles.text}>
          {colorName}: {hexCode}
        </Text>
      </View>
    </View>
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
})

export default ColorBox
