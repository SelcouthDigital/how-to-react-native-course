import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Paragraph = ({ children, type }) => {
  return <Text style={{ color: type === 'primary' ? 'black' : 'red' }}>{children}</Text>
}

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false)

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph)
  }

  return (
    <View style={styles.container}>
      <Button onPress={toggleParagraph} title='Toggle Paragraph' />
      <Paragraph type='primary'>Hello friends and React Native devs!</Paragraph>
      {showParagraph && <Paragraph type='secondary'>Learning props</Paragraph>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
