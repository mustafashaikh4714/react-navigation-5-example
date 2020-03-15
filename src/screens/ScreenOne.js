import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
const ScreenOne = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Screen one</Text>
      <Button title="Screen Two" onPress={() => navigation.navigate('two')} />
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
export default ScreenOne;
