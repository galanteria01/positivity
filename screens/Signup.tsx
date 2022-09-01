import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <View style={page.container}>
      <Text style={page.heading}>Signup</Text>
    </View>
  )
}

export default Signup

const page = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '600'
  }
})