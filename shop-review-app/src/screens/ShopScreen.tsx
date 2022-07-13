import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native'
import type { FC } from 'react'

export const ShopScreen: FC = () => {
  useEffect(() => {}, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Shop Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
})
