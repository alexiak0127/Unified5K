import { Text, View } from "react-native";
import { Link } from 'expo-router';


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Text>Home Page</Text>
      <Link href="/profile">Go to Profile</Link>
    </View>
    
  );
}
