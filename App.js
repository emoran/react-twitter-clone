import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import TweetScreen from './screens/TweetScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationsScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HonmeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:true,
      headerBacktitleVisible: false
    }}>
      {/* <Stack.Screen name="Home1" component={HomeScreen}/> */}
      <Stack.Screen name="Tab" component={TabNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="New Tweet" component={NewTweet} options={{title:''}}/>
      <Stack.Screen name="Tweet Screen" component={TweetScreen} options={{title:''}}/>
      <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{title:''}}/>
    </Stack.Navigator>

  );
}

const TabNavigator= () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel: false,
    }}>
      <Tab.Screen 
        name="Home1" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color,size})=>(
            <Ionicons name='home' size={size} color={color}/>
          )
        }}/>

      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({color,size})=>(
            <Ionicons name='search' size={size} color={color}/>
          )
        }}
        />
     
      <Tab.Screen 
      name="Notifications" 
      component={NotificationsScreen} 
      options={{
        tabBarIcon: ({color,size})=>(
          <Ionicons name='notifications' size={size} color={color}/>
        )
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>     
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
        headerShown:true,
      }}>
        <Drawer.Screen name="Home" component={HonmeStackNavigator}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        {/* <Drawer.Screen name="New Tweet" component={NewTweet}/>
        <Drawer.Screen name="Tweet Screen" component={TweetScreen}/>
        <Drawer.Screen name="Profile Screen" component={ProfileScreen}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  ); 
}

 