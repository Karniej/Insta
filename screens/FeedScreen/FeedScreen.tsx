import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useQuery } from 'react-query'
import { FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import { View } from '../../components/Themed'
import { request, gql } from 'graphql-request'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import styles from './FeedScreen.styles'
import { ListItemType } from '../../types'

export default function FeedScreen() {
  const { navigate } = useNavigation()
  const query = gql`
    {
      ships {
        image
        model
        name
        year_built
        active
        type
      }
    }
  `

  const getData = async () => {
    const { ships } = await request('https://api.spacex.land/graphql', query)

    return ships
  }
  const { isLoading, error, data } = useQuery('data', getData)
  console.log('data: ', data)

  const renderItem = ({ item }: ListItemType) => {
    return (
      <PhotoCard
        imgSrc={item.image}
        description={`${item.name}, ${item.type}`}
        key={item.image}
        onPress={() =>
          navigate('DetailsScreen', {
            item,
          })
        }
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={<View style={styles.separator} />}
        ListFooterComponent={isLoading ? <ActivityIndicator size='large' /> : null}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}
