import type {NativeStackScreenProps} from "@react-navigation/native-stack"

export type RootStackParamList = {
  Home: undefined,
  Auth: undefined,
  Profile: undefined,
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'Auth'>
export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>