// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }

  const theme = colorScheme === "dark" ? {
    ...MD3DarkTheme,
    dark: true,
    colors: {
      ...MD3DarkTheme.colors,
      primary: "#1BA8D8"
    }
  } : {
    ...MD3LightTheme,
    dark: true,
    colors: {
      ...MD3LightTheme.colors,
      primary: "#1BA8D8"
    }
  }
  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </PaperProvider>

    // </ThemeProvider>
  );
}
