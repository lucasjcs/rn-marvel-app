import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharacterDetails from '../screens/CharacterDetails';
import CharacterCategory from '../screens/CharacterCategory';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        <Stack.Screen name="CharacterCategory" component={CharacterCategory} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
