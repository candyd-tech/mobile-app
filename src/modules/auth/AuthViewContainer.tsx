import React, { useEffect, useState } from "react"
import auth from "@react-native-firebase/auth";
import { StyleSheet, View } from "react-native"
import { AuthScreenProps, HomeScreenProps } from "../../types/NavigatorTypes"
import GoogleSigninButton from "../../components/GoogleSigninButton"
import { UserAuthType } from "../../types"

const AuthView = ({ navigation }: AuthScreenProps) => {
  const [user, setUser] = useState<UserAuthType | null>();
  useEffect(() => {
    const authListener = auth().onAuthStateChanged(res => {
      setUser(res)
      navigation.replace("Main", {
        screen: "Home"
      })
    })

    return authListener()
  }, [])
  return (
    <View style={styles.container}>
      <GoogleSigninButton
        navigation={navigation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  }
})


export default AuthView;