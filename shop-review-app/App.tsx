import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
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

  return (
    <View style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => <ShopReviewItem shop={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
