import React, {useState} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity, 
    Image,
    TextInput, 
    KeyboardAvoidingView,
    ScrollView
 } from 'react-native'

const SelectItem = ({ closeModal, data, setFormData, formData}) => {

    const [searchText, setText] = useState('')

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{paddingHorizontal: 24,}}>
                <View style={{paddingTop: 20, paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontFamily: 'Helvetica-Bold', color: "#000"}}>Select an Item</Text>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => closeModal()}
                    style={{width: 14, height: 14}}
                    >
                        <Image source={require('../../assets/img/icons/close-button.png')} resizeMode="contain" style={{width: '100%', height: '100%'}} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#EFEFEF', paddingHorizontal: 12, borderRadius: 8, marginTop: 12}}>
                    <Image source={require('../../assets/img/icons/search.png')} resizeMode="contain" style={{width: 18, height: 18}} />
                    <TextInput
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 14,
                        flex: 1,
                    }}
                        value={searchText}
                        placeholder="Type here to search"
                        onChangeText={text => setText(text)}
                        selectionColor="#000"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      //height: 54,
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderColor: '#EFEFEF',
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: 14,
      marginTop: 8
    },
})

export default SelectItem
