import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/components/routes';
const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
export default App;
