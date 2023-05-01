import React, { useEffect, useState } from "react"
import auth from "@react-native-firebase/auth";
import { StyleSheet, View } from "react-native"
import { AuthScreenProps, HomeScreenProps } from "../../types/NavigatorTypes"
import GoogleSigninButton from "../../components/GoogleSigninButton"
import { useDispatch } from "react-redux";
import { setUid, setUserValue } from "../../redux/reducers/user";

const AuthView = ({ navigation }: AuthScreenProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authListener = auth().onAuthStateChanged(res => {
      fetch(`http://localhost:5000/v1/users?uid=${res?.uid}`, {
        method: "GET",
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
      }).then(resp => {
        resp.json().then(j => {
          console.log(j)

          dispatch(setUserValue({
            uid: j?.uid,
            email: j ? j?.email : undefined,
            username: j ? j?.username : undefined,
            fullname: j ? j?.fullname : undefined,
            photoUrl: j ? j?.photoUrl : undefined,
          }))
        })
      }).catch(err => {
        console.log(err)
      })

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