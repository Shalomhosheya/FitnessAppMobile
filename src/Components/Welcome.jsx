import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const Welcome = () => {
    const [loaded] = useFonts({
        'Kameron': require('../../assets/fonts/Kameron-Bold.ttf') ,
      });
    if (!loaded) {
        return null;
      }
  return (
    <View>
      <Text
      style={
        {
            fontFamily: 'Kameron',
            fontSize: 30,
            color: '#92400e',
            textAlign: 'center',
            marginBottom: 30,
            fontWeight: 'bold'
        }
      }
      >Welcome</Text>
    </View>
  )
}

export default Welcome