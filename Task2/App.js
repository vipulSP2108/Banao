import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, SafeAreaView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const cachedPhotos = await AsyncStorage.getItem('photos');
        if (cachedPhotos) {
          setPhotos(JSON.parse(cachedPhotos));
          setLoading(false);
        } else {
          fetchPhotos();
        }
      } catch (error) {
        console.error('Error fetching photos from AsyncStorage:', error);
        fetchPhotos();
      }
    };

    loadPhotos();
  }, []);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      const newPhotos = response.data.photos.photo.map(photo => ({
        id: photo.id,
        url: photo.url_s,
      }));

      await AsyncStorage.setItem('photos', JSON.stringify(newPhotos));
      setPhotos(newPhotos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching photos from API:', error);
      setLoading(false);
    }
  };

  const refreshPhotos = () => {
    fetchPhotos();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navItem}>Home</Text>
      </View>
      <View style={styles.content}>
        <Button title="Refresh" onPress={refreshPhotos} />
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={photos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.url }}
                style={styles.image}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#333',
    padding: 10,
  },
  navItem: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default App;