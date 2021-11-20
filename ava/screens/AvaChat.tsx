import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, IMessage, Reply, QuickReplies, User } from 'react-native-gifted-chat'
import { renderBubble } from '../components/ChatBubble'

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
      renderAvatar={() => { return (null) }}
      renderTime={() => { return (null) }}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
