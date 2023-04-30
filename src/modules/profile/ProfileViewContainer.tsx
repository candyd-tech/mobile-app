import React from "react"
import { Text, View } from "react-native"
import { ProfileScreenProps } from "../../types/NavigatorTypes"
import styles from "./ProfileStyles"
import ProfileInfo from "./components/ProfileInfo"
import ProfileFeed from "./components/ProfileFeed"

const ProfileView = ({ navigation }: ProfileScreenProps) => {
  return (
    <View style={styles.container}>
      <ProfileInfo />
      <ProfileFeed />
    </View>
  )
}


export default ProfileView;