import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
        resizeMode="contain" // cover, contain, stretch, repeat, center
      />
      <Text style={styles.description}>All done!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
  description: {
    textAlign: 'center',
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;