import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
