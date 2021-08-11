import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default AboutComponent = () => {
  return (
    <View style={styles.container}>
      <Text>ABOUT COMPONENT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});
