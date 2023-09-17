import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

interface Props{
    nome: string,
    visibilidade: boolean,
}

export function ModalPokemon( props: Props ){

    return(
        <Modal transparent={true} visible={props.visibilidade} animationType="fade">
            <View style={styles.container}>
                <Text >{props.nome}</Text>
            </View>
        </Modal>
    )
}