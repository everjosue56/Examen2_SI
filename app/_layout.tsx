import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import '../global.css'
import { Slot } from 'expo-router'


const _layout = () => {
  return (
    
      <View >
        <Slot />
      </View>
  )
}

export default _layout