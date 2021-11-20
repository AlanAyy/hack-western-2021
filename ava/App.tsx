import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Font from 'expo-font'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Bubble } from 'react-native-gifted-chat';
import AppLoading from 'expo-app-loading';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // const [fontsLoaded, setFontsLoaded] = useState(false)
  // const fontLoading = async () => {
  //   await Font.loadAsync({
  //     Poppins_400Regular
  //   })
  //   setFontsLoaded(true)
  // }
  // useEffect(() => {
  //   fontLoading()
  // })
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
