import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props{
    navigation: object,
    route: string,
    nome: string
}

export function BtSelect(props: Props) : JSX.Element{

    function onPress(){
        props.navigation.navigate(props.route)
    }

    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.name}>{props.nome}</Text>
        </TouchableOpacity>
    )
}