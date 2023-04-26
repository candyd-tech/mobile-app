import { View, Text, StyleSheet, Button } from "react-native";
import { HomeScreenProps } from "../../types/NavigatorTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { decremented, incremented } from "../../redux/reducers/counter";

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const count = useSelector(( state: RootState ) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Coming Soon...</Text>

      <Text>{count}</Text>

        <View style={{display: "flex", flexDirection: "row", gap: 10}}>
          <Button title="-1" onPress={() => dispatch(decremented())} />
          <Button title="+1" onPress={() => dispatch(incremented())}  />
        </View>

      <Button
        onPress={() => navigation.navigate("Profile")}
        title="Profile"
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