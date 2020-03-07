import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';
import { AppLoading } from 'expo';

// import Test from './src/components/test';
import MyStatusBar from './src/components/MyStatusBar';
import AppTabs from './src/navigation/AppTabs';
import { NavigationContainer } from '@react-navigation/native';

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/ck7cz3t1y1xky01dlexpn5ui1/master'
});

// const getFonts = () =>
//   Font.loadAsync({
//     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
//   });

const App = () => {
  // useEffect(() => {
  //   getFonts();
  // }, []);
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // if (fontsLoaded) {
  return (
    <ApolloProvider client={client}>
      {Platform.OS === 'ios' && (
        <MyStatusBar backgroundColor="white" barStyle="dark-content" />
      )}
      <NavigationContainer>
        <View style={styles.container}>
          <AppTabs />
        </View>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  }
});
