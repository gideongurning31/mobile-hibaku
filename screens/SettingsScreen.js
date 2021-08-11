import * as React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

function SettingsScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.defaultText}>PENGATURAN</Text>
    </View>
  );
}

export default SettingsScreen;
