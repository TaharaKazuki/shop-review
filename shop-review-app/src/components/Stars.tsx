import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
      <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
      <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
      <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
      <FontAwesome name="star" style={[styles.star, { fontSize: starSize }]} />
      <Text style={styles.scoreText}>{score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#900',
    marginRight: 4,
  },
  scoreText: {
    color: '#000',
  },
})
