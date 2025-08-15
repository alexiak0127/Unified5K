import Header from "@/components/Header";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
export default function RegisterScreen() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordConfirmation, setHidePasswordConfirmation] =
    useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      return Alert.alert("Password not the same, please try again");
    }
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        firestore()
          .collection("Users")
          .doc(email)
          .set({
            first_name: firstName,
            last_name: lastName,
            email: email,
          })
          .then(() => {
            console.log("User added!");
          });
        console.log("User account created & signed in!");
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
          Create an account
        </Text>
        <View className="rounded-2xl border-2 border-[#1BA8D8] px-2 py-16 mx-4">
          <View style={{ gap: 32 }}>
            <TextInput
              placeholder="First Name"
              outlineColor="#1BA8D8"
              mode="outlined"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
              placeholder="Last Name"
              outlineColor="#1BA8D8"
              mode="outlined"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
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
            <TextInput
              placeholder="Confirm Password"
              outlineColor="#1BA8D8"
              mode="outlined"
              secureTextEntry={hidePasswordConfirmation}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
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
              onPress={handleSubmit}
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
