import React from "react"
import { Alert, Button, StyleSheet, View } from "react-native"
import { AuthScreenProps, HomeScreenProps } from "../../types/NavigatorTypes"

const AuthView = ({ navigation }: AuthScreenProps) => {
    return (
        <View style={styles.container}>
            <Button 
                onPress={() => navigation.replace("Home")}
                title="Sign in With Google"
                accessibilityLabel="Sign in with Google"
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