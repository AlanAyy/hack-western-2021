import React from 'react'
import { StyleSheet } from 'react-native'

import { Bubble } from 'react-native-gifted-chat'

const defaultPaddingLR = -8

export const renderBubble = (props: any) => {
  return (
    <Bubble
      {...props}
      textStyle={{
        left: styles.bubbleText,
        right: styles.bubbleText,
      }}
      wrapperStyle={{
        left: styles.avaBubble,
        right: styles.userBubble,
      }}
    />
  )
}

const defaultBubble = {
  left: defaultPaddingLR + 12,
  right: defaultPaddingLR + 12,

  borderRadius: 50,
  paddingVertical: 12,
  paddingHorizontal: 24,
  textAlign: 'left',

  // shadowRadius: 10,
  opacity: 1,
}

const styles = StyleSheet.create({
  bubbleText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    color: 'white',
  },
  avaBubble: {
    ...defaultBubble,

    backgroundColor: '#27428f',
    shadowColor: '#27428f',
  },
  userBubble: {
    ...defaultBubble,

    backgroundColor: '#3f518f',
    shadowColor: '#3f518f',
  },
})

