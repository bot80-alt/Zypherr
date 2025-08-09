import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../theme/themecontext';
import { StyleSheet, ViewStyle } from 'react-native';
import RequestIcon from '../assets/icons/Request';
import HomeIcon from '../assets/icons/HomeIcon';
import HistoryIcon from '../assets/icons/HistoryIcon';
import UserIcon from '../assets/icons/UserIcon';
import WalletIcon from '../assets/icons/WalletIcon';
import ProfileScreen from '../screens/Profile';
import JetCoins from '../screens/ConnectWallet';
import DashBoard from '../screens/LivePrescription';
import ManagePrescriptions from '../screens/manpres';
import ViewRequest from '../screens/ViewRequest';

type TabParamList = {
  Home: undefined;
  Manage: undefined;
  Wallet: undefined;
  Profile: undefined;
  Request: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

type TabItem = {
  name: keyof TabParamList;
  component: React.ComponentType<any>;
  icon: React.ComponentType<{ color: string }>;
};

const Tabs: TabItem[] = [
  { name: 'Home', component: DashBoard, icon: HomeIcon },
  { name: 'Manage', component: ManagePrescriptions, icon: HistoryIcon },
  { name: 'Request', component: ViewRequest, icon: RequestIcon },
  { name: 'Wallet', component: JetCoins, icon: WalletIcon },
  { name: 'Profile', component: ProfileScreen, icon: UserIcon },
  
];

const TabNavigator: React.FC = () => {
  const theme  = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          left: 16,
          right: 16,
          height: 64,
          elevation: 5,
          shadowRadius: 5,
          borderTopWidth: 0.18,
          borderColor: '#000',
        } as ViewStyle,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
        },
        tabBarActiveTintColor: '#7746',
        tabBarInactiveTintColor: '#7865',
      }}
    >
      {Tabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <tab.icon color={focused ? '#000' : theme.theme.primary} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: 64,
  },
});

export default TabNavigator;
