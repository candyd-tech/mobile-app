import { View, Text, StyleSheet, Button } from "react-native";
import { HomeScreenProps } from "../../types/NavigatorTypes";

const HomeScreen = ({navigation}: HomeScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>Coming Soon...</Text>
            <Button
                onPress={() => navigation.replace("Auth")}
                title="Login"
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})



export default HomeScreen;