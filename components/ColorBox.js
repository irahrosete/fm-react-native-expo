import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  }

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.2
        ? 'black'
        : 'white',
  }

  return (
    <View>
      <View style={[styles.container, boxColor]}>
        <Text style={[styles.text, textColor]}>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
})

export default ColorBox
