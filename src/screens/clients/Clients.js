import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'

const Clients = () => {
    const [search, setSearch] = useState({
        text: '',
        isLoading: false,
      })

    const {text, isLoading} = search

    const onChange = name => text => setSearch({...formData, [name]: text}) 
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                paddingHorizontal: 24,
                paddingVertical: 30
                }}>
                <Text style={{fontSize: 24, fontFamily: 'Helvetica-Bold', color: "#000"}}>Clients</Text>
                <View>
                    <TextInput
                    style={{
                        //height: 54,
                        padding: 15,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        fontSize: 16,
                        marginTop: 21
                      }}
                    selectionColor="#000"
                    value={text}
                    onChangeText={onChange('text')}
                    placeholder="Search"
                    />
                </View>
                <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: "#000", marginTop: 17}}>24 Client records found</Text>
            </View>
        </SafeAreaView>
    )
}

export default Clients
