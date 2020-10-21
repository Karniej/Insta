import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { persistor, store } from './redux/store'
import { ActivityIndicator } from 'react-native'
import ConnectionInfoError from './components/ConnectionInfoError/ConnectionInfoError'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator size='large' />} persistor={persistor}>
          <SafeAreaProvider>
            <ConnectionInfoError />
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    )
  }
}
