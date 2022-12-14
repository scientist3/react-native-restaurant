import {
	View,
	Text,
	SafeAreaView,
	Image,
	TextInput,
	ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	UserIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
	const navigate = useNavigation();
	useLayoutEffect(() => {
		navigate.setOptions({
			headerShown: false,
		});
	});
	return (
		<SafeAreaView className="bg-white pt-10">
			{/* Header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				{/* Image */}
				<Image
					source={{
						uri: "https://links.papareact.com/wru",
					}}
					className="h-7 w-7 bg-gray-300 rounded-full"
				/>
				{/* Location */}
				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
					<Text className="font-bold text-xl">
						Current Location
						<ChevronDownIcon size={20} color="#00CCBB" />
					</Text>
				</View>
				{/* User Icon */}
				<UserIcon size={35} color="#00CCBB" />
			</View>

			{/* Search */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4 ">
				<View className="flex-row flex-1 space-x-2 bg-gray-200 px-3 py-1 justify-center items-center">
					<MagnifyingGlassIcon color="gray" size={20} />
					<TextInput
						className="flex-row flex-1 bbg-white py-2 "
						placeholder="Restrarants and cuisines"
						keyboardType="default"
					/>
				</View>
				<AdjustmentsVerticalIcon color="#00CCBB" size={30} />
			</View>

			{/* ScrollView */}
			<ScrollView className="bg-gray-100">
				{/* Catagories */}
				<Categories />
				<Categories />
				<Categories />
				<Categories />
				<Categories />
				<Categories />
				<Categories />
				<Categories />
				{/* Featured Rows */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
