import { StyleSheet } from "react-native";
import { Heigth, Width } from "../../api/Dimensions";

export const styles = StyleSheet.create({

    container:{
        width: "100%",
        height: Heigth * 0.1,
        backgroundColor: "#D6DBDF",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    },
    text:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
    }
})