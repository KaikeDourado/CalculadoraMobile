import React from "react";
import { Text, SafeAreaView } from "react-native";
import HomePage from "./Calculadora.js"

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomePage></HomePage>
    </SafeAreaView>
  );
}
