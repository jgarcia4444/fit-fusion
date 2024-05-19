import { StyleSheet, Text, View, Dimensions, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import AddLiftButton from "../components/buttons/AddLiftButton";
import BottomTabs from "../components/navigation/BottomTabs";

export default function Page() {
  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <AddLiftButton />
        <BottomTabs />
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
    position: 'absolute',
    top: 0,
  },
});
