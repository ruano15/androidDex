import React from "react";
import { Text, View } from "react-native";
import AppRoutes from "./src/routes/AppRoutes";
import Home from "./src/views/kanto/Kanto";

export default function App(){

  return(
    <View style={{flex: 1}}>
      <AppRoutes />
    </View>
  )
}