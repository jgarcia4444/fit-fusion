import { StyleSheet, Text, View, Dimensions, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "../components/navigation/tabs";

export default function Page() {
  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <Tabs />
      </View>
    </NavigationContainer>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#000",
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
  },
});
