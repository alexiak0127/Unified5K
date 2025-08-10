/**
 * Evelyn Kwan
 * Boston University
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Descriptor = ({ date, location, time }: { date: string; location: string; time: string }) => (
  <View className="border border-[#00AEEF] rounded-lg p-3 m-4 bg-white">
    <View className={tailwindStyles.row}>
      <Ionicons name="calendar" size={18} color="#00AEEF" />
      <Text className={tailwindStyles.label}> Date: </Text>
      <Text>{date}</Text>
    </View>
    <View className={tailwindStyles.row}>
      <Ionicons name="location" size={18} color="#00AEEF" />
      <Text className={tailwindStyles.label}> Location: </Text>
      <Text>{location}</Text>
    </View>
    <View className={tailwindStyles.row}>
      <Ionicons name="time" size={18} color="#00AEEF" />
      <Text className={tailwindStyles.label}> Time: </Text>
      <Text>{time}</Text>
    </View>
  </View>
);

export default Descriptor;

const tailwindStyles = {
  container: "border border-[#00AEEF] rounded-lg p-3 m-4 bg-white",
  row: "flex-row items-start mb-2",
  label: 'font-bold ml-2',
}
