import { StyleSheet, Text, View, Dimensions } from "react-native";

import Tabs from "../components/navigation/tabs";

export default function Page() {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: width,
    backgroundColor: "#000",
    justifyContent: 'flex-end',
  },
});
