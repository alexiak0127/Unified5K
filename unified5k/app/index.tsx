import { Text, View } from "react-native";
import { Link } from 'expo-router';
import "./global.css"


export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link href="/profile">Go to Profile</Link>

    </View>
    
  );
}
