import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import BusinessCard from "./components/BusinessCard";
import Bio from "./components/Bio";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Business Card"
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
      >
        <Stack.Screen
          options={{
            headerStyle: styles.navBar,
            headerTitleStyle: styles.navBar,
          }}
          name="Bio"
          component={Bio}
        />
        <Stack.Screen
          options={{
            headerStyle: styles.navBar,
            headerTitleStyle: styles.navBar,
          }}
          name="Business Card"
          component={BusinessCard}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#233249",
    color: "white",
  },
});
