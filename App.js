import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from './screens/HomeComponent';
import AboutComponent from './screens/AboutComponent';
import HeaderComponent from './screens/HeaderComponent';
import ReviewDetailComponent from './screens/ReviewDetailComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    nunito: require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-bold-italic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <HeaderComponent></HeaderComponent>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="About" component={AboutComponent} />
        <Stack.Screen name="Details" component={ReviewDetailComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
