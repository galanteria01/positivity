import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  const [hide, setHide] = React.useState(true)
  return (
    <View style={page.container}>
      <Text style={page.heading}>Welcome back to the</Text>
      <Text style={page.title}>Positivity!</Text>
      <Text style={page.subHeading}>The app to spread +ve vibes...</Text>
      <View style={page.space} />
      <TextInput
        placeholder='Email'
        style={page.input}
      />
      <TextInput
        placeholder='Password'
        secureTextEntry={true}
        style={page.input}
      />
      <View style={page.space} />
      <TouchableOpacity style={page.button}>
        <Text style={page.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const page = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '800'
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'teal',
    marginBottom: 8
  },
  subHeading: {

  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    borderColor: '#333',
    padding: 8
  },
  space: {
    paddingVertical: 24
  },
  button: {
    backgroundColor: 'teal',
    padding: 12,
    paddingHorizontal: 48,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})