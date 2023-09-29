import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const gohome = () => {
    navigation.navigate("Home");
  };
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "cyan",
      }}
    >
      <Pressable style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: "bold" }}>welcome {user.email}!</Text>
      </Pressable>

      <Pressable
        onPress={signOutUser}
        style={{
          width: 200,
          backgroundColor: "#318CE7",
          padding: 15,
          borderRadius: 7,
          marginTop: 20,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text style={{ fontSize: 18, textAlign: "center", color: "black" }}>
          Sign Out
        </Text>
      </Pressable>

      <Pressable
        onPress={gohome}
        style={{
          width: 200,
          backgroundColor: "#808080",
          padding: 15,
          borderRadius: 7,
          marginTop: 20,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text style={{ fontSize: 18, textAlign: "center", color: "black" }}>
          Go back to home
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
