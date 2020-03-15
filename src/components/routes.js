import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

import React from 'react';
import {Appbar} from 'react-native-paper';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './Drawer';
const Root = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#008966',
        },
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <TouchableOpacity>
            <Appbar.Action
              icon="menu"
              color="#fff"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen
        name="One"
        component={ScreenOne}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="two" component={ScreenTwo} />
      <Stack.Screen name="three" component={ScreenThree} />
    </Stack.Navigator>
  );
};

const Main = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Root" component={Root} />
    </Drawer.Navigator>
  );
};

export default Main;
