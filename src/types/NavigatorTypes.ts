import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Auth: undefined,
  Main: NavigatorScreenParams<TabBarParamList>
}

export type TabBarParamList = {
  Home: undefined,
  Profile: undefined,
  Dedications: undefined
}

// export type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'Auth'>
export type AuthScreenProps = CompositeScreenProps<NativeStackScreenProps<
  RootStackParamList, "Auth">,
  BottomTabScreenProps<TabBarParamList>
>
export type ProfileScreenProps = NativeStackScreenProps<TabBarParamList, 'Profile'>
export type HomeScreenProps = NativeStackScreenProps<TabBarParamList, 'Home'>
export type DedicationsScreenProps = NativeStackScreenProps<TabBarParamList, 'Dedications'>