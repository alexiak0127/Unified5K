/**
 * Josh Ilano
 * Boston University
 * 7-16-2025
 */


import { Button, Text, View } from "react-native";
import {useFonts} from 'expo-font';
// import { fontsLoaded } from "@/src/constants"; 

/**
 * @param currentAmount and totalAmount
 * @returns Donation Bar UI Element
 */
export default function DonationBar({currentAmount, totalAmount}: {currentAmount: number, totalAmount: number}) {


    
  if (currentAmount <= totalAmount) {
    const progress = (currentAmount / totalAmount) * 100;

    return (
      <View className="border border-[#00AEEF] rounded-lg p-3 m-4 bg-white">
        <Text className="font-poppins-medium mb-2">
          ${currentAmount} out of ${totalAmount} goal reached
        </Text>

        <View className="w-full h-5 bg-gray-300 rounded-full overflow-hidden mb-3">
          <View
            className="h-full bg-[#00AEEF]"
            style={{ width: `${progress}%` }}
          />
        </View>

        <View className="items-start">
          <Button title="Donate" onPress={() => {}} color="#00AEEF" />
        </View>
      </View>
    );
  }
}