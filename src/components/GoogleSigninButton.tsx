import React from "react";
import { Button } from "react-native";
import { AuthScreenProps } from "../types/NavigatorTypes";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const onGooglePressButton = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const { idToken } = await GoogleSignin.signIn();

    const googleCred = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCred);
}

const GoogleSigninButton = ({ navigation }: { navigation: AuthScreenProps['navigation'] }) => {
    return <Button
        title="Sign in With Google"
        accessibilityLabel="Sign in with Google"
        onPress={() => {
            onGooglePressButton().then(() => {
                navigation.replace("Main", {
                    screen: "Home"
                })
            }).catch(err => console.error(err))
        }}
    />
}

export default GoogleSigninButton;