import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export function SettingsScreen() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.text}>Settings Screen</Text>
        <Text style={styles.text2}>We can also use a custom navbar on this screen. This is just to demonstrate how the default navbar looks on screen.</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
    text2: {
      marginTop: 12,
      textAlign: 'center',
      fontSize: 18,
    },
})