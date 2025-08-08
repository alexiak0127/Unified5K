import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { PaperProvider } from "react-native-paper";
import './global.css';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#009EE2',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: '#eee',
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 4,
          },
          tabBarIcon: ({ color, size }) => {
            switch (route.name) {
              case 'media':
                return <FontAwesome5 name="globe" size={size} color={color} />;
              case 'resources':
                return <MaterialIcons name="folder" size={size} color={color} />;
              case 'index':
                return <Ionicons name="home-outline" size={size} color={color} />;
              case 'donation':
                return <Ionicons name="heart-outline" size={size} color={color} />;
              case 'profile':
                return <Ionicons name="person-outline" size={size} color={color} />;
              default:
                return null;
            }
          },
          headerShown: false,
        })}
      >
        <Tabs.Screen name="media" options={{ title: 'Media' }} />
        <Tabs.Screen name="resources" options={{ title: 'Resources' }} />
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="donation" options={{ title: 'Donation' }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      {/* // remove this after fixing the folder structure */}
        <Tabs.Screen name="race_details" options={{ href: null }} />
      </Tabs>
    </PaperProvider>

  );
}
