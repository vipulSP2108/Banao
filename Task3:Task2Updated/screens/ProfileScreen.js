import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export function ProfileScreen() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.text}>Profile Screen</Text>
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
})