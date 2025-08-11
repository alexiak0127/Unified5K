import { View, Pressable, Text, SafeAreaView } from "react-native";
import { useLocalSearchParams } from 'expo-router';

import Descriptor from "@/components/descriptor";
import DonationBar from "@/components/donationBar";
import ImageCarousel from "@/components/imageCarousel";
import Header from "@/components/Header";

import "./global.css";


const imageResponse = ["https://picsum.photos/id/1011/500/300",
          "https://picsum.photos/id/1025/500/300"]

export type RaceDetailsProps = {
  date: string;
  location: string;

  // The arguments below are expected to be made in another future API call
  time?: string;
  donationAmount?: number;
  donationGoal?: number;
  imageArray?: string[];
};

type BlueButtonProps = {
  name: string;
  onPress: () => void;
};

function BlueButton({ name, onPress }: BlueButtonProps) {
 return <Pressable
        style ={{width: '45%'}}
        onPress={onPress}
        >
        {({ pressed }) => (
            <Text style={{ color: '#ffffffff',
                textAlign: 'center',
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 5,
                backgroundColor: pressed ? '#3166a3ff' : '#4A90E2',
                fontWeight: 'bold',
            }}>{name}</Text>
        )}
  </Pressable>

}


export default function RaceDetails() {

  const params = useLocalSearchParams<{date: string, location: string}>();

  return (
    <SafeAreaView className="flex-1 space-y-5 bg-white">
      <Header />
      
      <ImageCarousel imageResponse={imageResponse} />

      <Descriptor
        date={params.date}
        location={params.location}
        time="10:00 AM - 2:00 PM" />

      <DonationBar currentAmount={5000} totalAmount={10000} />

      <Pressable
        style = {{width: '90%', alignSelf: 'center', borderRadius: 16, borderWidth: 3, borderColor: '#4A90E2',
          marginVertical: 20
        }}
        onPress={() => {}}
        >
        {({ pressed }) => (
            <Text style={{ color: '#000000ff',
                textAlign: 'center',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 14,
                backgroundColor: pressed ? '#3567a1ff' : '#aad0fdff',
                fontWeight: 'bold',
            }}>Become a Sponsor/Vendor</Text>
        )}
    </Pressable>


    <View className="absolute flex-row w-full bottom-5 justify-evenly">


      <BlueButton
        name ="Participate"
        onPress={() => {}}
      />

      <BlueButton
        name ="Volunteer"
        onPress={() => {}}
      />

    </View>

    </SafeAreaView>
  );
}

