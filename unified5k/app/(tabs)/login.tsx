import { ExternalLink } from "@/components/ExternalLink";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function LoginScreen() {
    const theme = useTheme()
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    return <SafeAreaView>
        <ScrollView style={{
            paddingHorizontal: 16
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Image source={require('@/assets/images/adaptx-logo.webp')} style={{
                    height: 120, width: 120
                }} />
                <MaterialIcons name="close" size={48} color="black" />
            </View>
            <Text variant="displayMedium" style={{
                textAlign: "center",
                marginBottom: 16
            }}>Login</Text>
            <View style={{
                borderRadius: 16, borderWidth: 2, borderColor: theme.colors.primary, paddingHorizontal: 8, paddingVertical: 32
            }}>
                <View style={{ gap: 32 }}>
                    <TextInput placeholder="Email" mode="outlined" outlineColor={theme.colors.primary} style={{
                        borderColor: theme.colors.primary
                    }} />
                    <TextInput secureTextEntry={!passwordVisibility} placeholder="Password" mode="outlined" outlineColor={theme.colors.primary} style={{
                        borderColor: theme.colors.primary
                    }} right={<TextInput.Icon onPress={() => {
                        setPasswordVisibility(!passwordVisibility)
                    }} icon={() => <MaterialIcons name={`${passwordVisibility ? "visibility" : "visibility-off"}`} size={24}></MaterialIcons>} />} />
                </View>
                <ExternalLink style={{
                    alignSelf: "flex-end", color: "#0023DD", marginTop: 8
                }} href="https://google.com">Forgot Password?</ExternalLink>
                <View style={{ marginTop: 24, gap: 32 }}>
                    <Button mode="contained" style={{
                        borderRadius: 8, padding: 8
                    }}><Text variant="headlineSmall" style={{
                        color: "#FFFFFF"
                    }}>Login</Text></Button>
                    <Button mode="outlined" style={{
                        borderRadius: 8, padding: 8, borderColor: theme.colors.primary
                    }}><Text variant="headlineSmall">Create new account</Text></Button>
                    <Button mode="outlined" style={{
                        borderRadius: 8, padding: 8, borderColor: theme.colors.primary
                    }}><Text variant="headlineSmall">Continue as guest</Text></Button>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>

}