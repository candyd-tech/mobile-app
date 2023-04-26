import React from "react"
import { Alert, Button, StyleSheet, View } from "react-native"
import { AuthScreenProps, HomeScreenProps } from "../../types/NavigatorTypes"
import GoogleSigninButton from "../../components/GoogleSigninButton"

const AuthView = ({ navigation }: AuthScreenProps) => {
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