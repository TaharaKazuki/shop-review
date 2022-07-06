import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import 'firebase/firestore'

export default function App() {
  useEffect(() => {
    getFirebaseItems()
  }, [])

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection('shops').get()
    const shops = snapshot.docs.map((doc) => doc.data())
    console.info(shops)
  }

  return (
    <View style={styles.container}>
      <Text>Hello Review App!</Text>
      <StatusBar style="auto" />
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
