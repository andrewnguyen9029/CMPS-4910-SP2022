import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Alarm from './Screens/Alarm';
import WorldClock from './Screens/WorldClock';
import Stopwatch from './Screens/Stopwatch';
import Timer from './Screens/Timer';
// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator    

           initialRouteName = 'Alarm'
           
           screenOptions={({ route }) => ({
            //headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              //ionic.io/ionicons by Andrew Nguyen
              if (route.name === 'WorldClock') {
                iconName = focused ? 'ios-globe': 'ios-globe-outline';
               } 
               else if (route.name === 'Alarm') {

                 iconName = focused ? 'ios-alarm' : 'ios-alarm-outline';

               }
               else if (route.name === 'Timer') {
                 iconName = focused ? 'ios-timer' : 'ios-timer-outline';
               }
               else if (route.name === 'Stopwatch') {
                 iconName = focused ? 'ios-stopwatch' : 'ios-stopwatch-outline';
               }
  
              // You can return any component that you like here!
              return <Ionicons name = { iconName} size = {size} color = {color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name = "WorldClock" component = {WorldClock}/>
          <Tab.Screen name = "Alarm" component = {Alarm} />
          <Tab.Screen name = "Stopwatch" component = {Stopwatch} />
          <Tab.Screen name = "Timer" component = {Timer}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

// Bottom Navigation and icons implemented by Andrew Nguyen
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/