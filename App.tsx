import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/components/screens/Home";
import Search from "./src/components/screens/Search";
import Reels from "./src/components/screens/Reels";
import Profile from "./src/components/screens/Profile";
import Activity from "./src/components/screens/Activity";
import Status from "./src/components/screenComponents/Status";
export default function App() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  const BottomTabScreen = () =>{
    return (
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarShowLabel: false,
          headerShown: false,
        tabBarStyle:{
          height: 50
        },
        tabBarIcon:({focused, size, color}) => {
          let iconName:string;
          switch (route.name) {
            case "Home":
                iconName = focused ? "home-sharp" : "home-outline";
                size = focused ? size + 8 : size + 2;
                break;
            case "Search":
                iconName = focused ? "search" : "ios-search-outline";
                break;
            case "Reels":
              iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline";
              break;
            case "Activity":
              iconName = focused ? "ios-heart" : "ios-heart-outline";
              break;
            case "Profile":
              iconName = focused ? "ios-person-circle" : "ios-person-circle-outline";
              break;
              default:
                  iconName = ""
          }
          return <Ionic name={iconName} size={size} color={color}/>
        }
      })}>
         <Tab.Screen name="Home" component={Home}/>
         <Tab.Screen name="Search" component={Search}/>
         <Tab.Screen name="Reels" component={Reels}/>
         <Tab.Screen name="Profile" component={Profile}/>
         <Tab.Screen name="Activity" component={Activity}/>
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTabScreen}/>
        <Stack.Screen name="Status" component={Status}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
