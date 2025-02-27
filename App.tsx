import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Dashboard from './src/Pages/DashBoard';
import TimerScreen from './src/Pages/TimeScreen';
import Calculation from './src/Pages/CalculationScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarHideOnKeyboard: true, 
      tabBarIcon: ({ color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = 'dumbbell';
            return(<FontAwesome6 name={iconName} size={size} color={color} />)
          case 'Timer':
            iconName = 'timer';
            return(<Ionicons name={iconName} size={size} color={color} />)
          case 'Calculation':
            iconName = 'calculator';
            return(<AntDesign name={iconName} size={size} color={color}/>)
          default:
            iconName = 'question';
        }
      },  
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#121212',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 5
      },
      tabBarActiveTintColor: '#FF8B00',
      tabBarInactiveTintColor: 'gray',
      
    })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="Calculation" component={Calculation} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNav" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
