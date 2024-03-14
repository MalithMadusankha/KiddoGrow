import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GuideScreen from '../screens/guide/Guide.Screen';

const Stack = createStackNavigator();

function GuideRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="innerGuide"
        component={GuideScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default GuideRoutes;
