import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Paragraph = ({ children }) => <Text style={s.text}>{children}</Text>

const s = StyleSheet.create({
  text: {
    fontSize: 16,
  },
})

export { Paragraph }
