import Header from "@/components/Header";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordConfirmation, setHidePasswordConfirmation] =
    useState(true);
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView>
        <Header />
        <Text
          variant="displayMedium"
          style={{
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Create an account
        </Text>
        <View className="rounded-2xl border-2 border-[#1BA8D8] px-2 py-16 mx-4">
          <View style={{ gap: 32 }}>
            <TextInput
              placeholder="First Name"
              outlineColor="#1BA8D8"
              mode="outlined"
            />
            <TextInput
              placeholder="Last Name"
              outlineColor="#1BA8D8"
              mode="outlined"
            />
            <TextInput
              placeholder="Email"
              outlineColor="#1BA8D8"
              mode="outlined"
            />
            <TextInput
              placeholder="Password"
              outlineColor="#1BA8D8"
              mode="outlined"
              secureTextEntry={hidePassword}
              right={
                <TextInput.Icon
                  icon={`${hidePassword ? "eye" : "eye-off"}`}
                  onPress={() => setHidePassword(!hidePassword)}
                />
              }
            />
            <TextInput
              placeholder="Confirm Password"
              outlineColor="#1BA8D8"
              mode="outlined"
              secureTextEntry={hidePasswordConfirmation}
              right={
                <TextInput.Icon
                  icon={`${hidePasswordConfirmation ? "eye" : "eye-off"}`}
                  onPress={() =>
                    setHidePasswordConfirmation(!hidePasswordConfirmation)
                  }
                />
              }
            />
          </View>
          <View style={{ marginTop: 24, gap: 32 }}>
            <Button
              mode="contained"
              buttonColor="#1BA8D8"
              style={{
                borderRadius: 8,
              }}
            >
              <Text
                variant="headlineSmall"
                style={{
                  color: "#ffffff",
                }}
              >
                Register
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
