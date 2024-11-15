import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from 'react-native-vector-icons';

export function FavouritesScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navbar}>
                <Ionicons
                    name="menu-outline"
                    size={30}
                    color="white"
                    onPress={() => navigation.openDrawer()}
                />
                {/* <RiMenu2Fill/> */}
                <Text style={styles.navItem}>Favourites</Text>
            </View>
      <View style={styles.screenContainer}>
        <Text style={styles.text}>Favourites Screen</Text>
      </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navItem: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
    },
    navbar: {
        backgroundColor: '#333',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 20,
      },
});