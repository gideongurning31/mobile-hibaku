import * as React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import NavMenu from './routes/NavMenu';

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
      <NavMenu></NavMenu>
    </NavigationContainer>
  );
}
