import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = props => {
  return (
    <>
      <Appbar.Header style={styles.header}>
        {props.previous && (
          <TouchableOpacity activeOpacity={0.4}>
            <Appbar.BackAction
              icon="arrow-left"
              color="#fff"
              onPress={() => props.navigation.goBack()}
            />
          </TouchableOpacity>
        )}
        <Appbar.Content title={props.scene.descriptor.options.headerTitle} />
        <TouchableOpacity activeOpacity={0.4}>
          <Appbar.Action
            icon="menu"
            color="#fff"
            onPress={() => {
              props.navigation.openDrawer();
            }}
          />
        </TouchableOpacity>
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#008966',
  },
});

export default Header;
