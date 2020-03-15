import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
const ScreenTwo = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Screen Two</Text>
      <Button
        title="Screen Three"
        onPress={() => navigation.navigate('three')}
      />
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
export default ScreenTwo;
