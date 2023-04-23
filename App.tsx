import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/modules/home/HomeViewContainer';
import AuthView from './src/modules/auth/AuthViewContainer';
import { RootStackParamList } from './src/types/NavigatorTypes';

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
