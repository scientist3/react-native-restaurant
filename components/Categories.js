import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CatagoryCard */}
      <CategoryCard
        imgUrl="https://picsum.photos/id/27/20/20"
        title="hello 1"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/25/20/20"
        title="hello 2"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/37/20/20"
        title="hello 3"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/45/20/20"
        title="hello 4"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/56/20/20"
        title="hello 6"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/76/20/20"
        title="hello 7"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
      <CategoryCard
        imgUrl="https://picsum.photos/id/78/20/20"
        title="hello 8"
      />
    </ScrollView>
  );
};

export default Categories;
