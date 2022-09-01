import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

/**
 * https://docs.expo.dev/get-started/installation/
 * https://expo.dev/accounts/scientist33/projects/restaurant
 * https://tailwindcss-react-native.vercel.app/installation
 * https://reactnavigation.org/docs/getting-started/
 */
