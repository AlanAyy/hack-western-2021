import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { GiftedChat, IMessage, Reply, QuickReplies, User } from 'react-native-gifted-chat'
import { renderBubble } from '../components/ChatBubble'

export default function AvaModel() {

  return (
    <Image
      style={styles.logo}
      source={require('../assets/images/ava.png')}
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});
