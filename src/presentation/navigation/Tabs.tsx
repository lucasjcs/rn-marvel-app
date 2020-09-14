import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from '../screens/Main';
import Favorites from '../screens/Favorites';
import { colors } from '../assets';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: colors.primary,
      style: {
        backgroundColor: colors.black,
        borderTopColor: colors.darker,
      },

    }}
  >
    <Tab.Screen
      name="Home"
      component={Main}
      options={{
        tabBarIcon: (colors) => (
          <Icon name="home" size={28} color={colors.color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: (colors) => (
          <Icon name="favorite" size={28} color={colors.color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
