import { StyleSheet } from "react-native";
import { Heigth, Width } from "../../api/Dimensions";

export const styles = StyleSheet.create({
    container:{
        width: Width * .9,
        height: Heigth * .9,
        backgroundColor: "#692A2A",
        borderRadius: 30,
        alignItems: "center",
        top: Heigth * 0.03,
        left: Width * 0.05,
    }
})