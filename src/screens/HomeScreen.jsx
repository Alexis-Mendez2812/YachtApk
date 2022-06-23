import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen(props) {
  const {navigation}= props;


const goToPage = ()=> {
  navigation.navigate('SettingsScreen')
}

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToPage} title='Ir A Ajustes' />
    </View>
  )
}