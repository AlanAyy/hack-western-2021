import React, { useState, useCallback, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { GiftedChat, IMessage, Reply, QuickReplies, User } from 'react-native-gifted-chat'
import { renderBubble } from '../components/ChatBubble'
import FadingEdge from 'react-native-fading-edge'

const avaBackgroundColor = '#0f2573'

export default function AvaChat() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hi! I\'m Ava. How can I help?',
        createdAt: new Date(),
        user: {
          _id: 2,
          //   name: 'React Native',
          //   avatar: '../images/favicon.png',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={styles.avaChat}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderAvatar={() => { return null }}
        renderTime={() => { return null }}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  avaChat: {
    flex: 1,
    backgroundColor: avaBackgroundColor,
  },
  fade: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})
