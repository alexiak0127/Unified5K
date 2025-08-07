import { Button, View, Image, StyleSheet } from "react-native";

import Descriptor from "@/components/descriptor";
import ImageCarousel from "@/components/imageCarousel";
import DonationBar from "@/components/donationBar";

import { Link } from 'expo-router';


export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/unified-5k-logo.png')}
        style={styles.logo}
      />

      <ImageCarousel imageResponse={[
        "https://picsum.photos/id/1011/500/300",
        "https://picsum.photos/id/1025/500/300"
      ]} />

      <Descriptor
        date="October 1, 2023"
        location="Boston, MA"
        time="10:00 AM - 2:00 PM"
      />

      <DonationBar currentAmount={5000} totalAmount={10000} />

      <Button
        title="Become a Sponsor/Vendor"
        onPress={() => {}}
        color="#00AEEF"
      />

      <View style={styles.buttonRow}>
        <Button
          title="Participate"
          onPress={() => {}}
          color="#00AEEF"
        />
        <Button
          title="Volunteer"
          onPress={() => {}}
          color="#00AEEF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonRow: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
});
