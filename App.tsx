import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStacks from './stacks/AuthStacks';
import AppStacks from './stacks/AppStacks';


export default function App() {
  const [logged, isLogged] = React.useState(false)
  return (
    <NavigationContainer>
      {
        logged ? (<AppStacks />) : (<AuthStacks />)
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
