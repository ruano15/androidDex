import { StyleSheet } from "react-native";
import { Heigth, Width } from "../../api/Dimensions";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: Width * .9,
        backgroundColor: "#BDC3C7",
        borderRadius: 15,
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    pokemonImage:{
        width: Heigth * .15,
        height: Heigth * .15,
    },
    detalhesContainers:{
        width: Width * .6,
    },
    id:{
        color: "#000",
        fontSize: 20,
        textTransform: "capitalize",
    },
    nome:{
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "capitalize",
        marginLeft: 5,
        width: Width * 0.3
    },
    tipo:{
        color: "#000",
        fontSize: 20,
        textTransform: "capitalize",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 30,
        padding: 7
    },
    tipoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: "100%",
        paddingVertical: 10,
    },
    nomeContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "100%",
        alignItems: "center",
    },
    containerModal:{
        width: Width * .9,
        height: Heigth * .9,
        backgroundColor: "#692A2A",
        borderRadius: 30,
        alignItems: "center",
        top: Heigth * 0.03,
        left: Width * 0.05,
    },
    containerStats:{
        width: Width * 0.8,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#BDC3C7",
        borderColor: "#000",
        borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    scaleStats:{
        width: (Width * 0.8) * 0.6,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#9C640C",
        borderColor: "#000",
        borderWidth: 1,
    },
    status:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        textTransform: "capitalize",
    },
    pokemonImageModal:{
        width: Heigth * .3,
        height: Heigth * .3,
    },
})