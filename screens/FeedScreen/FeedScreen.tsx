import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import { View } from '../../components/Themed'
import NetInfo from '@react-native-community/netinfo'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import styles from './FeedScreen.styles'
import { ListItemType, SingleShip, State } from '../../types'
import { requestApiData } from '../../redux/actions'
import { width } from '../../constants/Layout'
import ConnectionInfoError from '../../components/ConnectionInfoError/ConnectionInfoError'

export default function FeedScreen() {
  const { navigate } = useNavigation()
  const [networkError, setNetworkError] = useState('')
  const shouldShowNetInfo = networkError?.length > 0
  const dispatch = useDispatch()
  const { ships, isLoading } = useSelector(({ ships, isLoading }: State) => ({
    ships,
    isLoading,
  }))

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((info) => {
      const isConnected = info.type === 'cellular' || info.type === 'wifi'
      if (!isConnected) {
        setNetworkError("You are currently offline, the data is shown from your phone's cache")
      } else {
        setNetworkError('')
      }
    })
    return unsubscribe()
  })

  useEffect(() => {
    dispatch(requestApiData())
  }, [dispatch])

  const missingImage = `https://via.placeholder.com/${width}.jpg/fff`
  const keyExtractor = (item: SingleShip, index: number) => `${item.name}, ${index}`
  const renderItem = ({ item }: ListItemType) => {
    return (
      <PhotoCard
        imgSrc={item.image || missingImage}
        description={`${item.name}, ${item.type}`}
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
      {shouldShowNetInfo && <ConnectionInfoError errorMessage={networkError} />}
      <FlatList
        contentContainerStyle={styles.contentContainer}
        keyExtractor={keyExtractor}
        data={ships || []}
        renderItem={renderItem}
        ListHeaderComponent={<View style={styles.separator}></View>}
        ListFooterComponent={isLoading ? <ActivityIndicator size='large' /> : null}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}
