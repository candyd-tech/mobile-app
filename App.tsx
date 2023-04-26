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
  webClientId: '1089985563059-jputhdv2o6fud0pv70d649ovh66sv95p.apps.googleusercontent.com'
})
//9  

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
