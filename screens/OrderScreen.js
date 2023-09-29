import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const movetohome = () => {
    navigation.navigate("Home");
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <LottieView
        source={require("../assets/thumbs.json")}
        style={{
          height: 380,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          marginRight: 70,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been placed
      </Text>

      <LottieView
        source={require("../assets/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Pressable
        style={{ alignSelf: "center", marginTop: 20 }}
        onPress={movetohome}
      >
        <Text style={{ fontWeight: "bold", color: "blue" }}>
          Go to HomePage
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
