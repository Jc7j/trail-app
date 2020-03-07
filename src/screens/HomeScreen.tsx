import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.homeScreenContiner}>
      <Text style={styles.welcomeText}>Welcome</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScreenContiner: {
    backgroundColor: 'white',
    paddingLeft: 10
  },
  welcomeText: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 50
  }
});

export default HomeScreen;
