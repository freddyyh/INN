import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/homescreen';
import ListScreen from './screens/listscreen';
import DetailScreen from './screens/detailscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2F5D50',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
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
          options={{ title: 'Lokale detaljer' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}