import React from 'react';
import { SafeAreaView, View, ImageBackground } from 'react-native';
import Welcome from '../Components/Welcome';
import DailyWorkout from '../Components/DailyWorkout';
import Bulk from '../Components/Bulk';
import Anerobic from '../Components/Anerobic';

// Import images
const image1 = require('../../assets/images/pushup.jpeg');
const image2 = require('../../assets/images/bench_press.jpeg');
const image3 = require('../../assets/images/resistance_band.jpeg');

const Dashboard = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: '10%' }}>
      <Welcome />
      <View style={{ marginTop: 20 }}>
        
        {/* First Workout Card */}
        <ImageBackground 
          source={image1} 
          style={{
            width: '120%',
            padding: 50,
            borderRadius: 10,
            overflow: 'hidden',
            marginBottom: 40, 
          }}
          imageStyle={{ borderRadius: 10 }}
        >
          <DailyWorkout />
        </ImageBackground>

        {/* Second Workout Card */}
        <ImageBackground 
          source={image2} 
          style={{
            width: '120%',
            padding: 50,
            borderRadius: 10,
            overflow: 'hidden',
            marginBottom: 60, // Add space between cards
          }}
          imageStyle={{ borderRadius: 10 }}
        >
          <Bulk />
        </ImageBackground>

        <ImageBackground 
          source={image3} 
          style={{
            width: '120%',
            padding: 50,
            borderRadius: 10,
            overflow: 'hidden',
          }}
          imageStyle={{ borderRadius: 10 }}
        >
          <Anerobic />
        </ImageBackground>

      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
