import * as React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routeIcon, tabOptions } from './NavOptions';
import { palette } from '../styles/global';
import HomeScreen from '../screens/HomeScreen';
import CommodityScreen from '../screens/CommodityScreen';
import TransactionScreen from '../screens/TransactionScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => <Fontisto name={routeIcon[route.name]} size={size} color={color} />,
        tabBarActiveTintColor: palette.dark2,
        tabBarInactiveTintColor: palette.light1
      })}>
      <Tab.Screen name='Home' component={HomeScreen} options={tabOptions('Beranda')} />
      <Tab.Screen name='Commodity' component={CommodityScreen} options={tabOptions('Komoditas')} />
      <Tab.Screen name='Transaction' component={TransactionScreen} options={tabOptions('Transaksi', 4)} />
      <Tab.Screen name='Settings' component={SettingsScreen} options={tabOptions('Pengaturan')} />
    </Tab.Navigator>
  );
}

export default Navigator;
