import React from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';

import { globalStyles } from './styles/global';
import HomeComponent from './screens/HomeComponent';
import AboutComponent from './screens/AboutComponent';
import ReviewDetailComponent from './screens/ReviewDetailComponent';

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
    <View style={globalStyles.container}>
      <HomeComponent />
    </View>
  );
}
