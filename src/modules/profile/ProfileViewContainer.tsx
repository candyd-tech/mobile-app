import React from "react"
import { StyleSheet, View } from "react-native"
import { ProfileScreenProps } from "../../types/NavigatorTypes"

const ProfileView = ({ navigation }: ProfileScreenProps) => {
  return (
    <View style={styles.container}>
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


export default ProfileView;