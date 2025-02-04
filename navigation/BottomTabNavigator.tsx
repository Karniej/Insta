import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen'
import FeedScreen from '../screens/FeedScreen/FeedScreen'
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName='Feed'
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'md-home' : 'md-home'} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FeedStack = createStackNavigator<TabOneParamList>()

function FeedNavigator() {
  return (
    <FeedStack.Navigator initialRouteName='FeedScreen' screenOptions={{ headerShown: false }}>
      <FeedStack.Screen
        name='FeedScreen'
        component={FeedScreen}
        options={{ headerTitle: 'Feed' }}
      />
      <FeedStack.Screen name='DetailsScreen' component={DetailsScreen} />
    </FeedStack.Navigator>
  )
}
