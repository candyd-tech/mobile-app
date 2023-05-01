import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  dedications: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center"
  },
  profileMain: {
    flex: 0.3,
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profileInfoText: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  profileInfo: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between"
  },
  profileButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    paddingHorizontal: 24,
  },
  profileFeed: {
    flex: 0.7,
    alignSelf: "stretch",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  card: {
    flex: 1,
    height: 120,
    margin: 4,
    backgroundColor: "#577d86"
  },
})

export default styles