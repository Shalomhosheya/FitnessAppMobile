import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import DashBoard from './src/Pages/dashBoard';  // Import the DashBoard component

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State to track login status

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);  // Set login status to true if both username and password are entered
      Alert.alert('Login Successful', `Welcome ${username}!`);
    } else {
      Alert.alert('Error', 'Please enter both username and password');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-500 px-6 py-4">
      {isLoggedIn ? (
        // If logged in, show the dashboard
        <DashBoard />
      ) : (
        // Otherwise, show the login form
        <>
          <Text className="text-3xl font-semibold text-green-800 mb-6">Fitness App</Text>
          
          <View className="w-full mb-4">
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              className="bg-white p-3 rounded-lg shadow-md text-gray-700"
            />
          </View>

          <View className="w-full mb-6">
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
              className="bg-white p-3 rounded-lg shadow-md text-gray-700"
            />
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-blue-500 w-full py-3 rounded-lg shadow-md mb-4"
          >
            <Text className="text-white text-center text-lg font-semibold">Login</Text>
          </TouchableOpacity>
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
