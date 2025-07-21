import { ExternalLink } from "@/components/ExternalLink";
import { View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function LoginScreen() {
    const theme = useTheme()
    return <View>
        <Text variant="displayMedium" style={{
            textAlign: "center",
            marginBottom: 16
        }}>Login</Text>
        <View style={{
            borderRadius: 16, borderWidth: 2, borderColor: theme.colors.primary, paddingHorizontal: 8, paddingVertical: 64
        }}>
            <View style={{ gap: 32 }}>
                <TextInput placeholder="Email" mode="outlined" outlineColor={theme.colors.primary} style={{
                    borderColor: theme.colors.primary
                }} />
                <TextInput secureTextEntry={true} placeholder="Password" mode="outlined" outlineColor={theme.colors.primary} style={{
                    borderColor: theme.colors.primary
                }} />
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
    </View>
}