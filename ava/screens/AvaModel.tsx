import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default function AvaModel() {

  return (
    <View style={styles.avaModel}>
      <Image
        style={styles.avaImage}
        source={require('../assets/images/ava.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  avaModel: {
    alignItems: 'center',
  },
  avaImage: {
    width: 200,
    height: 200,
  },
});
