import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import reactDom from "react-dom";

const Categories = () => {
	const arrCardData = [
		{
			uri: "https://picsum.photos/id/27/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/25/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/37/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/45/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/56/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/76/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/79/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/676/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/665/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/344/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/73/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/722/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/223/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/278/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/478/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/52/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/678/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/718/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/234/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/621/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/54/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/65/100/100",
			title: "Hello",
		},
		{
			uri: "https://picsum.photos/id/98/100/100",
			title: "Hello",
		},
	];
	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
				paddingBottom: 10,
			}}
			horizontal
			showsHorizontalScrollIndicator={false}
			className="bg-yellow-100">
			{/* CatagoryCard */}
			{arrCardData.map((e) => {
				return <CategoryCard key={e.uri} imgUrl={e.uri} title={e.title} />;
			})}
		</ScrollView>
	);
};

export default Categories;
