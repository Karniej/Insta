import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import { View, Text } from '../../components/Themed'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import styles from './FeedScreen.styles'
import { ListItemType, SingleShip, State } from '../../types'
import { requestApiData, toggleLikedShip } from '../../redux/actions'
import { placeholderImageLink } from '../../constants/constants'

export default function FeedScreen() {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const { ships, isLoading, likedShips } = useSelector(
    ({ ships, isLoading, likedShips }: State) => ({
      ships,
      isLoading,
      likedShips,
    })
  )

  useEffect(() => {
    dispatch(requestApiData())
  }, [dispatch])

  const handleOnPressLike = (item: SingleShip) => {
    dispatch(toggleLikedShip(item))
  }

  const keyExtractor = (item: SingleShip, index: number) => `${item.name}, ${index}`
  const renderItem = ({ item }: ListItemType) => {
    const isLiked = likedShips.some((likedShip) => likedShip.id === item.id)
    return (
      <PhotoCard
        imgSrc={item.image || placeholderImageLink}
        description={`${item.name}, ${item.type}`}
        onPressLike={() => handleOnPressLike(item)}
        isLiked={isLiked}
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
        keyExtractor={keyExtractor}
        data={ships || []}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.separator}>
            <Text style={styles.title}>SPACEX SHIPS</Text>
          </View>
        }
        ListFooterComponent={isLoading ? <ActivityIndicator size='large' /> : null}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}
