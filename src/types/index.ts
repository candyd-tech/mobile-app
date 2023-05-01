import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export type UserType = {
    uid?: string,
    email?: string,
    username?: string,
    fullname?: string,
    photoUrl?: string,
}

export type UserAuthType = FirebaseAuthTypes.User | null;