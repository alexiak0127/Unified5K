import { View, StyleSheet, Text } from "react-native";

import ImageCarousel from "@/components/imageCarousel";
import DonationBar from "@/components/donationBar";

export default function Index() {

  const imageUrls = [
  'https://picsum.photos/id/1011/500/300',
  'https://picsum.photos/id/1025/500/300',
  'https://picsum.photos/id/1035/500/300',
  'https://picsum.photos/id/1043/500/300',
  'https://picsum.photos/id/1062/500/300',
  'https://picsum.photos/id/1074/500/300',
];

  return <View style={styles.container}>
    {/* {ImageCarousel(imageUrls) } */}
    { DonationBar(500, 1250.75) }
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});