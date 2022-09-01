import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./screens/HomeScreen";

const HomeScreen = () => {
	return (
		<View>
			<Text className="text-red-500">HomeScreen loremx3</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate("Details")}
			/>
		</View>
	);
};

function DetailsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Details Screen</Text>
			<Button
				title="Go to Details... again"
				onPress={() => navigation.push("Details")}
			/>
		</View>
	);
}

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		// <View>Hello</View>
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
