import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function FitnessHome() {
  return (
    <View className="flex-1 bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-lg">
        <Text className="text-white text-3xl font-bold">Fitness App</Text>
        <Text className="text-white text-sm mt-1">Track your fitness journey</Text>
      </View>

      {/* Main Content */}
      <View className="flex-row px-0 py-2 space-x-1">
        {/* Left Sidebar */}
        <View className="w-1/4 bg-white shadow-lg rounded-lg p-4">
          <Text className="text-lg font-semibold text-purple-700 mb-4 ">Menu</Text>
          <TouchableOpacity className="py-2">
            <Text className="text-purple-600 hover:text-purple-800 mb-1">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2">
            <Text className="text-purple-600 hover:text-purple-800 mb-1">Workouts</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2">
            <Text className="text-purple-600 hover:text-purple-800 mb-1">Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2">
            <Text className="text-purple-600 hover:text-purple-800 mb-1">Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Right Main Section */}
        <View className="w-3/4">
          {/* Cards */}
          <View className="flex-row space-x-4 mb-6">
            {/* Card 1 */}
            <View className="flex-1 bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg shadow-md">
              <Text className="text-lg font-semibold text-white">Today's Workout</Text>
              <Text className="text-3xl font-bold text-white mt-2">45 min</Text>
            </View>
            {/* Card 2 */}
            <View className="flex-1 bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg shadow-md">
              <Text className="text-lg font-semibold text-white">Calories Burned</Text>
              <Text className="text-3xl font-bold text-white mt-2">500 kcal</Text>
            </View>
          </View>

          {/* Card 3 */}
          <View className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 rounded-lg shadow-md mb-6">
            <Text className="text-lg font-semibold text-white">Recent Activity</Text>
            <Text className="text-white mt-2">You completed a 5K run today.</Text>
          </View>

          {/* Card 4 */}
          <View className="bg-gradient-to-r from-pink-400 to-pink-600 p-6 rounded-lg shadow-md">
            <Text className="text-lg font-semibold text-white">Upcoming Workouts</Text>
            <Text className="text-white mt-2">Strength training scheduled for tomorrow.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}