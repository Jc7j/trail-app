import React from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

import Test from './src/components/test';
import MyStatusBar from './src/components/MyStatusBar';

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/ck7cz3t1y1xky01dlexpn5ui1/master'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      {Platform.OS === 'ios' && (
        <MyStatusBar backgroundColor="#AEC6BF" barStyle="dark-content" />
      )}
      <View style={styles.container}>
        <ScrollView>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Test />
        </ScrollView>
      </View>
    </ApolloProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEC6BF',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    paddingRight: 10
  }
});
