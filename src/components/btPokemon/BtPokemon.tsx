import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native'
import { styles } from './styles'
import api from '../../api/PokeAPI'
import { Heigth, Width } from '../../api/Dimensions'

interface Props{
    name: object, 
    navigation: object,
    route: string,
}

export function BtPokemon(props:Props): JSX.Element{

    const [pokemon, setPokemon] = useState('')
    const [id, setId] = useState('')
    const [shyne, setShyne] = useState ('img1')
    const [types, setType] = useState<any[]>([])
    const [stats, setStats] = useState<any[]>([])
    const [showModal, setShowModal] = useState(false)
    const [cor, setCor] = useState("#BDC3C7")
    const [bar, setBar] = useState("#494242")

    async function getPokemons(){
        const res = await api.get(`/pokemon/${props.name}`)
        try{
            setPokemon(res.data.name)
            setId(res.data.id)
            setType(res.data.types)
            setStats(res.data.stats)
        }catch(error){
            console.log(error)
        }
    }

    let imagem = {
        img1: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        img2: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`
    }

    function openModal(){
        setShowModal(true)
        backColor()
        barColor()
    }

    function closeModal(){
        setShowModal(false)
        setShyne('img1')
    }

    function tradeShyni(){
        setShyne(state => state === 'img1' ? 'img2': 'img1')
    }

    async function backColor(){
        const tipo = types.map((tipo) => tipo.type.name)
        if(tipo[0] == "bug") setCor("#A8B8204D")
        if(tipo[0] == "dark") setCor("#7058484D")
        if(tipo[0] == "dragon") setCor("#7038F84D")
        if(tipo[0] == "electric") setCor("#F8D0304D")
        if(tipo[0] == "fairy") setCor("#EE99AC4D")
        if(tipo[0] == "fighting") setCor("#C030284D")
        if(tipo[0] == "fire") setCor("#F080304D")
        if(tipo[0] == "flying") setCor("#A890F04D")
        if(tipo[0] == "ghost") setCor("#7058984D")
        if(tipo[0] == "grass") setCor("#78C8504D")
        if(tipo[0] == "ground") setCor("#E0C0684D")
        if(tipo[0] == "ice") setCor("#98D8D84D")
        if(tipo[0] == "normal") setCor("#A8A8784D")
        if(tipo[0] == "poison") setCor("#A040A04D")
        if(tipo[0] == "psychic") setCor("#F858884D")
        if(tipo[0] == "rock") setCor("#B8A0384D")
        if(tipo[0] == "steel") setCor("#B8B8D04D")
        if(tipo[0] == "water") setCor("#6890F04D")
    }

    function barColor(){
        const tipo = types.map((tipo) => tipo.type.name)
        if(tipo[0] == "bug") setBar("#A8B820")
        if(tipo[0] == "dark") setBar("#705848")
        if(tipo[0] == "dragon") setBar("#7038F8")
        if(tipo[0] == "electric") setBar("#F8D030")
        if(tipo[0] == "fairy") setBar("#EE99AC")
        if(tipo[0] == "fighting") setBar("#C03028")
        if(tipo[0] == "fire") setBar("#F08030")
        if(tipo[0] == "flying") setBar("#A890F0")
        if(tipo[0] == "ghost") setBar("#705898")
        if(tipo[0] == "grass") setBar("#78C850")
        if(tipo[0] == "ground") setBar("#E0C068")
        if(tipo[0] == "ice") setBar("#98D8D8")
        if(tipo[0] == "normal") setBar("#A8A878")
        if(tipo[0] == "poison") setBar("#A040A0")
        if(tipo[0] == "psychic") setBar("#F85888")
        if(tipo[0] == "rock") setBar("#B8A038")
        if(tipo[0] == "steel") setBar("#B8B8D0")
        if(tipo[0] == "water") setBar("#6890F0")
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return(
        <>
            <Modal transparent={true} visible={showModal} animationType="fade">
                <TouchableOpacity onPress={closeModal}>
                    <View style={{width: Width, height: Heigth, backgroundColor: "#FFF"}}>
                    <View style={{width: Width * .9,height: Heigth * .9,backgroundColor: cor,borderRadius: 30,alignItems: "center",top: Heigth * 0.03,left: Width * 0.05,}}>
                        <View style={styles.nomeContainer}>
                            <Text style={styles.id}>#{id}</Text>
                            <Text style={styles.nome}>{pokemon}</Text>
                        </View>
                        <TouchableOpacity onPress={tradeShyni}>
                            <Image style={styles.pokemonImageModal} source={{uri: imagem[shyne]}}/>
                        </TouchableOpacity>
                        <View style={styles.tipoContainer}>
                        {types.map(types => 
                            <Text style={styles.tipo}>{types.type.name}</Text>
                        )}
                    </View>
                    <View>
                        {stats.map(status =>
                            <View>
                                <Text style={styles.status}>{status.stat.name}: {status.base_stat}</Text>
                                <View style={styles.containerStats}>
                                    <TouchableOpacity disabled style={{width: (Width * 0.8) * (status.base_stat/300), height: 20, borderRadius: 10, backgroundColor: bar, borderColor: "#000", borderWidth: 1, alignItems: 'center'}}/>
                                </View>
                            </View>
                        )}
                    </View>
                    </View>
                    </View>
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity onPress={openModal} style={styles.container}>
                <View style={styles.detalhesContainers}>
                    <View style={styles.nomeContainer}>
                        <Text adjustsFontSizeToFit style={styles.id}>#{id}</Text>
                        <Text adjustsFontSizeToFit style={styles.nome}>{pokemon}</Text>
                    </View>
                    <View style={styles.tipoContainer}>
                        {types.map(types => 
                            <Text style={styles.tipo}>{types.type.name}</Text>
                            )}
                    </View>
                </View>
                <Image style={styles.pokemonImage} source={{uri: imagem.img1}}/>
            </TouchableOpacity>
        </>
    )
}