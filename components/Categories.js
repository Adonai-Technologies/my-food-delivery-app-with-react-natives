import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className='mt-6'>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          const isActive = category.id == activeCategory;
          const btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          const textClass = isActive ? "font-semibold text-gray-800" : "text-gray-500";

          return (
            <View key={index} className='flex justify-center items-center mr-6'>
              <TouchableOpacity onPress={() => setActiveCategory(category.id)}>
                <View className={`p-1 rounded-full shadow ${btnClass}`}>
                  <Image
                    source={category.image}
                    style={{ width: 45, height: 45 }}
                  />
                </View>
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
