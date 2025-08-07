import { Button, Text, View, Image } from "react-native";

import Descriptor from "@/components/descriptor";
import ImageCarousel from "@/components/imageCarousel";
import DonationBar from "@/components/donationBar";

import { Link } from 'expo-router';
import "./global.css";

export default function Index() {
  return (
    <View className="flex-col items-center space-y-5 justify-center bg-white">
      <Image
        source={require('@/assets/images/unified-5k-logo.png')}
        style={{ width: 200, height: 200 }}
      />
      <ImageCarousel imageResponse={
        ["https://picsum.photos/id/1011/500/300",
          "https://picsum.photos/id/1025/500/300"]
      } />

      <Descriptor
        date="October 1, 2023"
        location="Boston, MA"
        time="10:00 AM - 2:00 PM" />

      <DonationBar currentAmount={5000} totalAmount={10000} />

      <Button
        title="Become a Sponsor/Vendor"
        onPress={() => { }}
        color="#00AEEF"
      />

      <View className="absolute flex-row bottom-5 space-x-5 items-center justify-center ">
        <Button
          title="Participate"
          onPress={() => { }}
          color="#00AEEF"
        />
        <Button
          title="Volunteer"
          onPress={() => { }}
          color="#00AEEF"
        />
      </View>

    </View>
  );
}
