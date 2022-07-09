import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getShops } from './src/lib/firebase'
import { Shop } from './src/lib/types/shop'
import { ShopReviewItem } from './src/components/ShopReviewItem'

export default function App() {
  const [shops, setShops] = useState<Shop[]>([])

  useEffect(() => {
    getFirebaseItems()
  }, [])

  const getFirebaseItems = async () => {
    const shops = await getShops()
    setShops(shops)
  }

  const shopItems = shops.map((shop, index) => (
    <ShopReviewItem shop={shop} key={index.toString()} />
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
