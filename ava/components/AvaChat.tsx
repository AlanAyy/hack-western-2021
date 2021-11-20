import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { GiftedChat, IMessage, Reply, QuickReplies, User } from 'react-native-gifted-chat'
import { renderBubble } from './GiftedChatCustom'

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
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});