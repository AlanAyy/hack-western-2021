import AsyncStorage from '@react-native-async-storage/async-storage'
import { IMessage } from 'react-native-gifted-chat'

export async function storeMessage(newMessage: IMessage): Promise<void> {
    const messages = await getMessages()
    messages.push(newMessage)
    console.log(messages)
    await setMessages(messages)
}

export async function setMessages(value: IMessage[]): Promise<void> {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('messages', jsonValue)
  } catch (err) {
    console.log(err)
  }
}

export async function getMessages(): Promise<IMessage[]> {
  try {
    const jsonValue = await AsyncStorage.getItem('messages')
    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch (err) {
    console.log(err)
    return []
  }
}