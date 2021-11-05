import React, {useState, useEffect} from 'react'
import { 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity, 
    Image,
    TextInput, 
    FlatList
 } from 'react-native'

const SelectClient = ({ closeModal, data, setFormData, formData}) => {

    const {clientId} = formData

    const [filterClient, setClient] = useState(data)
    const [searchText, setText] = useState('')

    const handleSelect = (name, id) => {
        setFormData({...formData, clientName: name, clientId: id})
        closeModal()
    }

    useEffect(() => {
        let filterClt = data.filter(item => {
            return item.name.toLowerCase().includes(searchText.toLowerCase())
          })

        setClient(filterClt)
    }, [searchText])

    // const searchClient = text => {
    //     let filterClt = data.filter(item => {
    //         return item.name.toLowerCase().includes(text.toLowerCase())
    //       })
    //     setText(text)
    //     setClient(filterClt)  
    // }

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={() => handleSelect(item.name, item.clId)}
            style={{
                flexDirection: 'row', 
                alignItems: 'center', 
                borderTopWidth: index == 0 ? 0 : 1, 
                borderTopColor: '#EFEFEF', 
                paddingHorizontal: 24, 
                paddingVertical: 14
                
                }}>
                <Image source={ item.clId === clientId ? require('../../assets/img/icons/checkdark.png') : require('../../assets/img/icons/circledark.png')} resizeMode="contain" style={{width: 18, height: 18}} />
                <Text style={{fontSize: 15, fontFamily: 'Helvetica', color: "#000", marginLeft: 20}}>{item.name}</Text>
            </TouchableOpacity>
        )
      }

    return (
        <SafeAreaView style={{flex: 1}}>
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={() => closeModal()}
            style={{paddingTop: 20, paddingBottom: 15, paddingHorizontal: 24,}}>
                <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: "#000"}}>CANCEL</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#EFEFEF', paddingHorizontal: 24}}>
                <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                    <Image source={require('../../assets/img/icons/search.png')} resizeMode="contain" style={{width: 18, height: 18}} />
                    <TextInput
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 14,
                        flex: 1,
                    }}
                        value={searchText}
                        placeholder="Search"
                        onChangeText={text => setText(text)}
                        selectionColor="#000"
                    />
                </View>
                {searchText !== "" &&
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setText('')}
                    style={{width: 14, height: 14}}
                    >
                        <Image source={require('../../assets/img/icons/close-button.png')} resizeMode="contain" style={{width: '100%', height: '100%'}} />
                    </TouchableOpacity> 
                }
            </View>
            <FlatList
              data={filterClient}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingTop: 20, paddingBottom: 30}}
              renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default SelectClient
