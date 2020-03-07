import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Trail from '../components/Trail';

const TrailScreen = () => {
  return (
    <ScrollView style={styles.testContainer}>
      <Trail />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  testContainer: {
    backgroundColor: 'white',
    paddingLeft: 10
  }
});

export default TrailScreen;
