import React from "react";
import { ScrollView, Text, View } from "react-native";
import { BtSelect } from "../../components/btSelect/BtSelect";
import { Headers } from "../../components/headers/Headers";

interface Props{
    navigation: object
}

export default function Home(props: Props){

    return(
        <View style={{flex: 1, alignItems: "center"}}>
            <Headers />
            <ScrollView>
                <BtSelect navigation={props.navigation} route="Kanto" nome="Geração I"/>
                <BtSelect navigation={props.navigation} route="Jotho" nome="Geração II"/>
                <BtSelect navigation={props.navigation} route="Hoenn" nome="Geração III"/>
                <BtSelect navigation={props.navigation} route="Sinnoh" nome="Geração IV"/>
                <BtSelect navigation={props.navigation} route="Unova" nome="Geração V"/>
                <BtSelect navigation={props.navigation} route="Kalos" nome="Geração VI"/>
                <BtSelect navigation={props.navigation} route="Alola" nome="Geração VII"/>
                <BtSelect navigation={props.navigation} route="Galar" nome="Geração VIII"/>
                <BtSelect navigation={props.navigation} route="Hisui" nome="Geração IX"/>
                <BtSelect navigation={props.navigation} route="OtherForms" nome="Outras formas"/>
            </ScrollView>
        </View>
    )
}