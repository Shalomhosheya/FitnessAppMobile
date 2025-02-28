import { View, Text } from 'react-native'
import React from 'react'

const DailyWorkout = () => {
  return (
    <View>
      <Text style={
        {
            fontFamily: 'sans-serif',
            fontSize: 30,
            color: '#33FFFF',
            textAlign: 'center',
            marginBottom: 0,
            fontWeight: 'bold'
        }
        
      }>Cardio</Text>
    </View>
  )
}

export default DailyWorkout