import { Text, ScrollView, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
	return (
		<TouchableOpacity>
			<Image
				source={{
					uri: imgUrl,
				}}
				className="h-40 w-40 rounded mx-2"
			/>
			<Text className="absolute bottom-1 left-3 text-white font-bold">
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CategoryCard;
