import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import { getShops } from '../lib/firebase'
import { Shop } from '../lib/types/shop'
import { ShopReviewItem } from '../components/ShopReviewItem'

export const HomeScreen = () => {
  const [shops, setShops] = useState<Shop[]>([])

  useEffect(() => {
    getFirebaseItems()
  }, [])

  const getFirebaseItems = async () => {
    const shops = await getShops()
    setShops(shops)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => <ShopReviewItem shop={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
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
