import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
    const theme = useTheme()
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [passwordConfirmVisibility, setPasswordConfirmVisibility] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    return <SafeAreaView>
        <ScrollView style={{ paddingHorizontal: 16 }}>
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
            }}>Create an account</Text>
            <View style={{
                borderRadius: 16, borderWidth: 2, borderColor: theme.colors.primary, paddingHorizontal: 8, paddingVertical: 32
            }}>
                <Text style={{ textAlign: "center" }}>{errorMessage}</Text>
                <View style={{ gap: 32 }}>
                    <TextInput placeholder="First Name" mode="outlined" outlineColor={theme.colors.primary} style={{
                        borderColor: theme.colors.primary
                    }} />
                    <TextInput placeholder="Last Name" mode="outlined" outlineColor={theme.colors.primary} style={{
                        borderColor: theme.colors.primary
                    }} />
                    <TextInput placeholder="Email" mode="outlined" outlineColor={theme.colors.primary} style={{
                        borderColor: theme.colors.primary
                    }} />
                    <TextInput secureTextEntry={!passwordVisibility} placeholder="Password" mode="outlined" outlineColor={theme.colors.primary} style={{
                        borderColor: theme.colors.primary
                    }} right={<TextInput.Icon onPress={() => {
                        setPasswordVisibility(!passwordVisibility)
                    }} icon={() => <MaterialIcons name={`${passwordVisibility ? "visibility" : "visibility-off"}`} size={24}></MaterialIcons>} />} />
                    <TextInput onPress={() => {
                        setPasswordVisibility(!passwordConfirmVisibility)
                    }} secureTextEntry={!passwordConfirmVisibility} placeholder="Confirm Password" mode="outlined" outlineColor={theme.colors.primary} right={<TextInput.Icon onPress={() => {
                        setPasswordConfirmVisibility(!passwordConfirmVisibility)
                    }} icon={() => <MaterialIcons name={`${passwordConfirmVisibility ? "visibility" : "visibility-off"}`} size={24}></MaterialIcons>} />} style={{
                        borderColor: theme.colors.primary
                    }} />
                </View>

                <Button mode="contained" style={{
                    borderRadius: 8, padding: 8, marginTop: 24
                }}><Text variant="headlineSmall" style={{
                    color: "#FFFFFF"
                }}>Register</Text></Button>


            </View>
            {/* <Text style={{ fontSize: 40, padding: 12 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text> */}
        </ScrollView>
    </SafeAreaView>

}