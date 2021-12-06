import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Config, Counters } from '../screens';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#000000',
        tabBarInactiveBackgroundColor: '#000000'
      }}
    >
      <Tab.Screen
        name='Counters'
        component={Counters}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Icon name='home' size={30} color='#FFFFFF' />
            } else {
              return <Icon name='home' size={25} color='#A9A9A9' />
            }
          }
        }}
      />
      <Tab.Screen
        name='Config'
        component={Config}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Icon name='cog' size={30} color='#FFFFFF' />
            } else {
              return <Icon name='cog' size={25} color='#A9A9A9' />
            }
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;