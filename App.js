import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
      initialRegion={{
        latitude: 14.626505041600272,
        longitude: 121.05860335313187,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
