import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Paragraph } from '../components/Paragraph'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Paragraph>Home screen</Paragraph>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export { HomeScreen }
