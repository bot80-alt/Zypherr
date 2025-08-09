import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '../theme/themecontext';
import SplashScreen from '../screens/SplashScreen';
import OtpPage from '../screens/OtpPage';
import Dashboard from '../screens/LivePrescription';
import LoginPage from '../screens/LoginPage';
import TabNavigator from './tabnavigator';
import OrderScreen from '../screens/manpres';
import ShipmentScreen from '../screens/ShipmentScreen';
import ConfirmationScreen from '../screens/Confirmation';
import PaymentScreen from '../screens/PaymentScreen';
import ProfileScreen from '../screens/Profile';
import RegisterPage from '../screens/Registration';

export type RootStackParamList = {
  Splash: undefined;
  IntroPage: undefined;
  OtpVerification: undefined;
  Registration: undefined;
  Login: undefined;
  Dashboard: undefined;
  Tabnavigator: undefined;
  Orders: undefined
  Shipment: undefined
  Payment: undefined
  Confirmation: undefined
  Profile: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Registration" component={RegisterPage} />
          <Stack.Screen name="OtpVerification" component={OtpPage} />
          <Stack.Screen name="Tabnavigator" component={TabNavigator}/>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Orders" component={OrderScreen} />
          <Stack.Screen name="Shipment" component={ShipmentScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
