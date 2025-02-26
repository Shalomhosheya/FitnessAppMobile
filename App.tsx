import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-amber-200 flex-1 justify-center items-center px-4">
      <Text className="text-2xl font-semibold text-gray-700 text-center">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
