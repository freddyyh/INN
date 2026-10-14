import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/homescreen';
import ListScreen from './screens/listscreen';
import DetailScreen from './screens/detailscreen';
import MapScreen from './screens/mapscreen';
import FavoritesScreen from './screens/favoritscreen';

import { FavoritesProvider } from './context/favorit';
import { navigationOptions } from './styles/stil';

// Opretter en stack-navigator; styrer skærmskift og tilbage-navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={navigationOptions}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Lokale Lokaler' }}
          />

          <Stack.Screen
            name="List"
            component={ListScreen}
            options={{ title: 'Alle lokaler' }}
          />

          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{ title: 'Lokaledetaljer' }}
          />

          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{ title: 'Lokaler på kort' }}
          />

          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{ title: 'Mine favoritter' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}