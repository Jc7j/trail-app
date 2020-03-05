import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform
} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

interface MyStatusBarProps {
  backgroundColor: string;
  barStyle: 'dark-content' | 'default' | 'light-content';
}

const MyStatusBar = (props: MyStatusBarProps) => {
  const { backgroundColor, barStyle } = props;
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

export default MyStatusBar;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B'
  }
});
