import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import AnimatedIcon from '../../components/AnimatedIcon'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import { Text, View } from '../../components/Themed'
import { ListItemType } from '../../types'
import styles from './DetailsScreen.styles'

type DetailsScreenType = {
  route: {
    params: ListItemType
  }
  navigation: {
    goBack: () => void
  }
}

export default function DetailsScreen({ route, navigation }: DetailsScreenType) {
  const { item } = route.params
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrowContainer} onPress={navigation.goBack}>
        <AnimatedIcon
          color='dodgerblue'
          name='ios-arrow-back'
          size={30}
          style={styles.animatedIcon}
        />
        <Text style={styles.backText}>Go back</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {item.name} {item.model}
        </Text>
        <Text>Year build: {item.year_built}</Text>
        <Text>Type: {item.type}</Text>
      </View>
      <PhotoCard imgSrc={item.image} description={item.name} />
    </View>
  )
}
