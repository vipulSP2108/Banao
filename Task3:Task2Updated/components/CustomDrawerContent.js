import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContent}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Feed')}
      >
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Feed')}
      >
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Favourites')}
      >
        <Text style={styles.menuText}>Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
  },
});

export default CustomDrawerContent;
