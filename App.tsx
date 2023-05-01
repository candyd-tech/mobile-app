import React from 'react';
import { Provider } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './src/redux/store';
import AuthView from './src/modules/auth/AuthViewContainer';
import HomeScreen from './src/modules/home/HomeViewContainer';
import ProfileView from './src/modules/profile/ProfileViewContainer';
import DedicationsView from './src/modules/dedications/DedicationsViewContainer';
import { RootStackParamList, TabBarParamList } from './src/types/NavigatorTypes';

const TabBar = createBottomTabNavigator<TabBarParamList>()
const Stack = createNativeStackNavigator<RootStackParamList>()

GoogleSignin.configure({
  webClientId: '1089985563059-jputhdv2o6fud0pv70d649ovh66sv95p.apps.googleusercontent.com'
})

function Main(): JSX.Element {
  return (
    <TabBar.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <TabBar.Screen name="Home" component={HomeScreen} />
      <TabBar.Screen name="Profile" component={ProfileView} />
      <TabBar.Screen name="Dedications" component={DedicationsView} />
    </TabBar.Navigator>
  )
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Auth" component={AuthView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
