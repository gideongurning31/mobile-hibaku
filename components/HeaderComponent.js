import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>HIBAKU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#52734D',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HeaderComponent;