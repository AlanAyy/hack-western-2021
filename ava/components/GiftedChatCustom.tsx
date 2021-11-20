import React, { useState, useCallback, useEffect } from 'react'
// import { View } from 'react-native'
// import Font from 'expo-font'
import { useFonts } from 'expo-font'

import { Bubble } from 'react-native-gifted-chat'
// import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/dev'

export const renderBubble = (props: any) => {
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

  // if (!fontsLoaded) {
  //   return <Bubble {...props} />
  // }

  // const [fontsLoaded] = useFonts({
  //   Poppins_400Regular: require('../assets/fonts/Poppins-Regular.ttf')
  // })

  // if (!fontsLoaded) {
  //   return null
  // }

  return (
    <Bubble
      {...props}
      textStyle={{
        left: {
          fontFamily: 'Poppins_400Regular',
          color: 'white',
        },
        right: {
          fontFamily: 'Poppins_400Regular',
          color: 'white',
        },
      }}

      wrapperStyle={{
        left: {
          backgroundColor: '#27428f',
          left: -42
        },
        right: {
          backgroundColor: '#3f518f',
        }
      }}
    />
  )
}