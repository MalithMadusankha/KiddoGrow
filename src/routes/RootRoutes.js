import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/Welcome.Screen';
import LoginScreen from '../screens/user/Login.Screen';
import HomeScreen from '../screens/Home.Screen';

const RootRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        shifting="true"
        screenOptions={() => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: false,
          gestureDirection: 'horizontal',
        })}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRoutes;
