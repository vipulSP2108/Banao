import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Button, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { FavouritesScreen } from './screens/FavouritesScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <Ionicons
        name="menu-outline"
        size={30}
        color="white"
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.navItem}>Home</Text>
    </View>
  );
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Favourites" component={FavouritesScreen} options={{ headerShown: false}}  />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          headerShown: true,
          // header: ({ navigation }) => <CustomHeader navigation={navigation} /> // Pass navigation prop to CustomHeader
        }} 
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({  
  navbar: {
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
},
});
