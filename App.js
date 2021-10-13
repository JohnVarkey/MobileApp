import React from "react";
import { View, Text } from "react-native";
import LoginPage from "./Pages/LoginPage/LoginPage.js";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoginPage />
    </View>
  );
}
