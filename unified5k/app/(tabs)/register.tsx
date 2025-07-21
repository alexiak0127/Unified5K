import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function RegisterScreen() {
    const theme = useTheme()
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [passwordConfirmVisibility, setPasswordConfirmVisibility] = useState(false)
    
    return <View>
        <Text variant="displayMedium" style={{
            textAlign: "center",
            marginBottom: 16
        }}>Create an account</Text>
        <View style={{
            borderRadius: 16, borderWidth: 2, borderColor: theme.colors.primary, paddingHorizontal: 8, paddingVertical: 64
        }}>
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
    </View>
}