import React, { useState, useCallback, useEffect } from 'react'
import { FlatList, StyleSheet, RefreshControl } from 'react-native'
import PalettePreview from '../components/PalettePreview'

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([])

  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    )
    if (result.ok) {
      const palettes = await result.json()
      setColorPalettes(palettes)
    }
  }, [])

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true)
    await fetchColorPalettes()
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
    setIsRefreshing(false)
  }, [fetchColorPalettes])

  useEffect(() => {
    fetchColorPalettes()
  }, [fetchColorPalettes])

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item)
          }}
          colorPalette={item}
        />
      )}
      // refreshing={true}
      // onRefresh={() => {}}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
    />
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
})
export default Home