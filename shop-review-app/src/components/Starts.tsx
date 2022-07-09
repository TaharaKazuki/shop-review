import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
  score: number
  starSize?: number
  textSize?: number
}

export const Starts: FC<Props> = ({ score, starSize = 16, textSize = 14 }) => {
  return <View style={styles.container}>Starts</View>
}

const styles = StyleSheet.create({
  container: {},
})
