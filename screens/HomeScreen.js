import * as React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.defaultText}>BERANDA</Text>
    </View>
  );
}

export default HomeScreen;
