import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Headers(){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>AndroidDex</Text>
        </View>
    )
}