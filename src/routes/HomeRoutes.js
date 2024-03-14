import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ClinicScreen from '../screens/home/Clinic.Screen';
import MedicalScreen from '../screens/home/Medical.Screen';
import VaccinationScreen from '../screens/home/Vaccination.Screen';
import HomeScreen from '../screens/home/Home.Screen';

const Stack = createStackNavigator();

function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="innerHome"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Clinic"
        component={ClinicScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Medical"
        component={MedicalScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Vaccination"
        component={VaccinationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Growth"
        component={VaccinationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeRoutes;
