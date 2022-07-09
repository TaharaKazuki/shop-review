import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

type Props = {
  score: number
  starSize?: number
  textSize?: number
}

export const Stars: FC<Props> = ({ score, starSize = 16, textSize = 14 }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  star: {
    color: '#900',
    marginRight: 4,
  },
})
