import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { useQuery, useQueryCache } from 'react-query'
import { StyleSheet, FlatList, Dimensions, SafeAreaView } from 'react-native'
import PhotoCard from '../components/PhotoCard'
const { width } = Dimensions.get('window')
export default function FeedScreen() {
  const { navigate } = useNavigation()
  const api = 'https://example-data.draftbit.com/restaurant_photos'
  const { isLoading, error, data } = useQuery('data', () =>
    fetch(`${api}?_limit=30`).then((res) => res.json())
  )
  const cache = useQueryCache()

  useEffect(() => {
    cache.invalidateQueries('data')
    console.log('data: ', data)
  })

  const renderItem = ({ item }: any) => {
    return (
      <PhotoCard
        imgSrc={item.image_url}
        description={item.caption}
        key={item.imgSrc}
        onPress={() => navigate('Details')}
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFAE9',
  },
  contentContainer: {
    alignItems: 'center',
    width,
    justifyContent: 'center',
    backgroundColor: '#EFFAE9',
  },
})
