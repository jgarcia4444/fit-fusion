import { StyleSheet, Text, View, Dimensions, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from "@react-navigation/native";

import BottomTabs from "../components/navigation/BottomTabs";
import Account from "../screens/Account";
import AddLiftButton from "../components/buttons/AddLiftButton";
import AccountButton from "../components/buttons/AccountButton";


export default function Page() {

  const route = useRoute();
  console.log(route.name)

  const Stack = createStackNavigator()

  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <AddLiftButton />
        <Stack.Navigator
        >
          <Stack.Screen name="Main" component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
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
