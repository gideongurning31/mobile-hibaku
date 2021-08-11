import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function AboutComponent() {
  return (
    <View style={styles.container}>
      <Text>ABOUT COMPONENT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});

export default AboutComponent;
