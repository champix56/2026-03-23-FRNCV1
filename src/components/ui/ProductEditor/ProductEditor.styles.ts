import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 22,
  },
  central: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 5,
    padding: 10,
    width: "100%",
    // width:Dimensions.get('window').width-50
  },
  left: {
    paddingHorizontal: 8,
    gap: 5,
    flexGrow: 1,
  },
  headerValue: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textAlign: "center",
  },
  inputText: {
    height: 50,
    fontSize: 20,
  },
  input: {
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  multiLinesInput: {
    fontSize: 15,
  },
  right: {
    // backgroundColor:'skyblue',
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderStyle: "solid",
    borderWidth: 1,
  },
  thumbnail: {
    height: 64,
    width: 64,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 7,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
