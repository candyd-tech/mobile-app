import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/modules/home/HomeViewContainer';
import AuthView from './src/modules/auth/AuthViewContainer';
import { RootStackParamList } from './src/types/NavigatorTypes';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { GoogleSignin } from "@react-native-goo"

const Stack = createNativeStackNavigator<RootStackParamList>()

GoogleSignin.configure({
  webClientId: '291152260993-1j4fg2pm85ojl1hh6o2t07sf9e8hcpjp.apps.googleusercontent.com'
})

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
