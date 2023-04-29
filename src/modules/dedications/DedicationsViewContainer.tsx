import React from "react"
import { Alert, Button, StyleSheet, View } from "react-native"
import { DedicationsScreenProps } from "../../types/NavigatorTypes"

const DedicationsView = ({ navigation }: DedicationsScreenProps) => {
  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default DedicationsView;