import { View, StyleSheet, Text } from "react-native";

import ImageCarousel from "@/components/imageCarousel";
import DonationBar from "@/components/donationBar";
import Descriptor from '@/components/descriptor';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    paddingHorizontal: 16,  // horizontal padding for consistent alignment
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


export default function Index() {

  const imageUrls = [
  'https://picsum.photos/id/1011/500/300',
  'https://picsum.photos/id/1025/500/300',
  'https://picsum.photos/id/1035/500/300',
  'https://picsum.photos/id/1043/500/300',
  'https://picsum.photos/id/1062/500/300',
  'https://picsum.photos/id/1074/500/300',
];

  return (
  <View style={styles.container}>
    <View style={[styles.section, { marginBottom: 16 }]}>
      <ImageCarousel imageUrls={imageUrls} />
    </View>

    <View style={styles.section}>
      <Descriptor
        date="August 23, 2025"
        location="Copley Square, 560 Boylston St, Boston, MA 02116"
        time="10:00 AM"
      />
    </View>

    <View style={[styles.section, { marginTop: 16 }]}>
      {DonationBar(500, 1250.75)}
    </View>
  </View>
);


}