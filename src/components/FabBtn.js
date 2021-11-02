import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

const FabBtn = ({showFabBtns, fabActive}) => {
    return (
        <TouchableOpacity 
        onPress={showFabBtns}
        style={{
            position: 'absolute',
            bottom: 25,
            right: 15,
            zIndex: 2,
            backgroundColor: fabActive ? '#fff' : '#000' ,
            borderWidth: 1,
            borderRadius: 9,
            width: 56,
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
        }}
        activeOpacity={0.9}
        >
            <Image 
            source={fabActive ? require('../assets/img/icons/plus-black.png') : require('../assets/img/icons/plus-white.png')} 
            resizeMode="contain" 
            style={{width: 22, height: 23}} />
        </TouchableOpacity>
    )
}

export default FabBtn
