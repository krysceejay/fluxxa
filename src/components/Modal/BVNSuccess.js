import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'

const BVNSuccess = ({navigation, closeModal}) => {

    const handleClose = () => {
        navigation.navigate('SetPin')
        closeModal()
    }
    return (
        <View style={{
            width: '80%', 
            backgroundColor: '#fff', 
            paddingHorizontal: 20, 
            paddingVertical: 26,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <Image source={require('../../assets/img/icons/thumbsup.png')} resizeMode="contain" style={{width: 46, height: 46}} />
            <Text style={{color: '#1C1C1C', fontSize: 24, fontFamily: 'Helvetica-Bold', textAlign: 'center', marginTop: 9}}>Awesome!</Text>
            <Text style={{color: '#888888', fontSize: 14, fontFamily: 'Helvetica', textAlign: 'center', marginTop: 7, lineHeight: 22}}>
            BVN verified successfully, kindly proceed to create your security PIN.
            </Text>
            <TouchableOpacity 
            activeOpacity= {0.6}
            onPress={handleClose}
            style={{
                backgroundColor: '#000',
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 5,
                marginTop: 24
            }}>
                <Text style={{color: '#fff', textAlign: 'center', textTransform: 'capitalize', fontSize: 16, fontFamily: 'Helvetica'}}>Okay</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BVNSuccess
