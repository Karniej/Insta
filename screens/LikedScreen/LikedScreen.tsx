import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import { Text, View } from '../../components/Themed'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import styles from './LikedScreen.styles'
import { ListItemType, SingleShip, State } from '../../types'
import { placeholderImageLink } from '../../constants/constants'
import { toggleLikedShip } from '../../redux/actions'

export default function LikedScreen() {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const { isLoading, likedShips } = useSelector(({ isLoading, likedShips }: State) => ({
    isLoading,
    likedShips,
  }))
  const isLikedShipsEmpty = likedShips.length === 0

  const handleOnPressLike = (item: SingleShip) => {
    dispatch(toggleLikedShip(item))
  }

  const keyExtractor = (item: SingleShip, index: number) => `${item.name}, ${index}`
  const renderItem = ({ item }: ListItemType) => {
    const isLiked = item && likedShips.some((likedShip) => likedShip.id === item.id)

    return (
      <PhotoCard
        onPressLike={() => handleOnPressLike(item)}
        imgSrc={item.image || placeholderImageLink}
        description={`${item.name}, ${item.type}`}
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
        data={likedShips || []}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.separator}>
            <Text style={styles.title}>
              {isLikedShipsEmpty ? "You don't like any ship right now." : 'liked ships'}
            </Text>
          </View>
        }
        ListFooterComponent={isLoading ? <ActivityIndicator size='large' /> : null}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}
