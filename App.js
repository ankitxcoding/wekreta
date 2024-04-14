import { StyleSheet, Text, View, StatusBar } from "react-native";
import Body from "./src/components/Body";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Header />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
