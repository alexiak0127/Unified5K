import Header from "@/components/Header";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "@react-native-firebase/auth";

export default function LoginScreen() {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        console.log("User account signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }

        Alert.alert("An error occurred, please try again later!");
      });
  };
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
          Login
        </Text>
        <View className="rounded-2xl border-2 border-[#1BA8D8] px-2 py-16 mx-4">
          <View style={{ gap: 32 }}>
            <TextInput
              placeholder="Email"
              outlineColor="#1BA8D8"
              mode="outlined"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              outlineColor="#1BA8D8"
              mode="outlined"
              secureTextEntry={hidePassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
              right={
                <TextInput.Icon
                  icon={`${hidePassword ? "eye" : "eye-off"}`}
                  onPress={() => setHidePassword(!hidePassword)}
                />
              }
            />
          </View>
          <Link
            style={{
              alignSelf: "flex-end",
              color: "#0023DD",
              marginTop: 8,
            }}
            href="https://google.com"
          >
            Forgot Password?
          </Link>
          <View style={{ marginTop: 24, gap: 32 }}>
            <Button
              mode="contained"
              buttonColor="#1BA8D8"
              style={{
                borderRadius: 8,
              }}
              onPress={handleLogin}
            >
              <Text
                variant="headlineSmall"
                style={{
                  color: "#ffffff",
                }}
              >
                Login
              </Text>
            </Button>
            <Button
              mode="outlined"
              textColor="#000000"
              style={{
                borderRadius: 8,
              }}
            >
              <Text variant="headlineSmall">Create new account</Text>
            </Button>
            <Button
              mode="outlined"
              textColor="#000000"
              style={{
                borderRadius: 8,
              }}
            >
              <Text variant="headlineSmall">Continue as guest</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
