import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getShops } from './src/lib/firebase'
import { Shop } from './src/lib/types/shop'

export default function App() {
  const [shops, setShops] = useState<Shop[]>([])

  useEffect(() => {
    getFirebaseItems()
  }, [])

  const getFirebaseItems = async () => {
    const shops = await getShops()
    console.info('shop', shops)
    setShops(shops)
  }

  const shopItems = shops.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ))

  return <View style={styles.container}>{shopItems}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
