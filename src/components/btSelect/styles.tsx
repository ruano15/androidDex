import { StyleSheet } from "react-native"
import { Heigth, Width } from "../../api/Dimensions"

export const styles = StyleSheet.create({

    container:{
        width: Width * 0.9,
        height: Heigth * 0.1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#CD6155",
        borderRadius: 15,
        marginVertical: 10
    },
    name:{
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
    }
})