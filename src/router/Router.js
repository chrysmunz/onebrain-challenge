import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';

const Router = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Router;
