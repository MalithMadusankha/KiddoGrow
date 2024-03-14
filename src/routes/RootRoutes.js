import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import WelcomeScreen from '../screens/Welcome.Screen';
import LoginScreen from '../screens/user/Login.Screen';
import ChatScreen from '../screens/Chat.Screen';
import ContactScreen from '../screens/Contact.Screen';
import {StyleSheet} from 'react-native';
import {ACTIVE_COLOR, INACTIVE_COLOR} from '../utility/ConstVaribales';
import HomeRoutes from './HomeRoutes';
import GuideRoutes from './GuideRoutes';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  const isClinicVisible = false;
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      activeColor={ACTIVE_COLOR}
      inactiveColor={INACTIVE_COLOR}
      barStyle={styles.barStyle}
      tabBarOptions={{
        showLabel: false,
        style: styles.bgWhite,
      }}
      activeIndicatorStyle={styles.bgTrasperent}
      screenOptions={({route}) => ({
        tabBarVisible: route.name !== 'Clinic' || isClinicVisible,
      })}>
      <Tab.Screen
        name="Index"
        component={HomeRoutes}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={25} color={color} />,
          style: styles.bgWhite,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Q & A',
          tabBarIcon: ({color}) => (
            <AntDesign name="wechat" size={25} color={color} />
          ),
          style: styles.bgWhite,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({color}) => (
            <AntDesign name="contacts" size={25} color={color} />
          ),
          style: styles.bgWhite,
        }}
      />
      <Tab.Screen
        name="Guide"
        component={GuideRoutes}
        options={{
          tabBarLabel: 'Guide',
          tabBarIcon: ({color}) => <Icon name="book" size={25} color={color} />,
          style: styles.bgWhite,
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen // Wrap TabNavigator in Stack.Screen
        name="Home" // Consider renaming "Home" to avoid confusion
        component={TabNavigator} // Pass TabNavigator as the component
        options={{headerShown: false}} // Optional: Hide header for tabs
      />
    </Stack.Navigator>
  );
}

const RootRoutes = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  barStyle: {backgroundColor: '#ffffff', height: 70},
  bgTrasperent: {backgroundColor: '#ffffff'},
  bgWhite: {backgroundColor: '#EAFAFB'},
  displayNone: {display: 'none'},
});

export default RootRoutes;
