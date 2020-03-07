import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from './AppParamList';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import TrailScreen from '../screens/TrailScreen';

const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name == 'Home') {
            iconName = 'home';
            return <AntDesign name={'home'} size={size} color={color} />;
          }
          if (route.name == 'Trail') {
            iconName = 'tree';
            return <FontAwesome name={'tree'} size={size} color={color} />;
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: '#dddddd',
        showLabel: false,
        style: {
          backgroundColor: '#689587'
        }
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Trail" component={TrailScreen} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
