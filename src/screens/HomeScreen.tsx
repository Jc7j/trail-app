import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.homeScreenContiner}>
      <Text>Helo world</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScreenContiner: {
    backgroundColor: 'white',
    paddingLeft: 10
  }
});

export default HomeScreen;
