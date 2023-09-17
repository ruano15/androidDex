import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { BtPokemon } from "../../components/btPokemon/BtPokemon";
import api from "../../api/PokeAPI";
import { ModalPokemon } from "../../components/modalPokemon/ModalPokemon";

interface Props{
    navigation: object
}

export default function Kanto(props:Props){

    const [pokemons, setPokemons] = useState<any[]>([])

    async function getPokemons(){
        const res = await api.get(`/pokemon?limit=151&offset=0`)
        try{
            setPokemons(res.data.results)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return(
        <View style={{flex: 1, alignItems: "center"}}>
            <FlatList
            data={pokemons}
            renderItem={({item}) =>
                <>
                    <BtPokemon name={item.name} route="Pokemon" navigation={props.navigation}/>
                </>
            }
            keyExtractor={item => item.name}
            />
        </View>
    )
}