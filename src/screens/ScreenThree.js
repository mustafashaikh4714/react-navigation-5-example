import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
const ScreenThree = () => {
  return (
    <View style={styles.screen}>
      <Text>Screen Three</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ScreenThree;
