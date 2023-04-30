import { Button, Image, Text, View } from "react-native"
import styles from "../ProfileStyles"

const ProfileInfo = () => {
  return (
    <View style={styles.profileMain}>
      <View style={styles.profileInfo}>
        {/* Profile Image */}
        <View>
          <Image
            source={require("./aarya.jpg")}
            style={{width: 100, height: 100, borderRadius: 100}}
          />
        </View>

        <View style={styles.profileInfoText}>
          {/* User Name Info */}
          <View>
            <Text style={{fontSize: 24, fontWeight: "700"}}>Arya Jhaveri</Text>
            <Text style={{fontStyle: "italic"}}>@aarya123</Text>
          </View>

          {/* Posts and Dedications */}
          <View style={{display: "flex", flexDirection: "row", gap: 10}}>
            <View>
              <Text style={styles.dedications}>18</Text>
              <Text>Post</Text>
            </View>

            <View>
              <Text style={styles.dedications}>7</Text>
              <Text>Dedications</Text>
            </View>
          </View>

        </View>
      </View>
      {/* Profile Buttons */}
      <View style={styles.profileButton}>
        <View style={{flex: 1}}>
          <Button color={"black"} title="Edit Profile" />
        </View>
        <View style={{flex: 1}}>
          <Button color={"black"} title="Unlock Rewards" />
        </View>
      </View>
    </View>
  )
}

export default ProfileInfo;