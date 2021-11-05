import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, Switch, Platform, TextInput, Modal } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import SelectClient from '../../components/Modal/SelectClient'
import SelectItem from '../../components/Modal/SelectItem'

const invoiceData = [
    { itemName: 'Shoe', qty: 1, price: 80 },
    { itemName: 'Shoe', qty: 1, price: 80 },
    { itemName: 'Shoe', qty: 1, price: 80 },
]
const clientData = [
    { name: 'Akondu', clId: 1 },
    { name: 'Chibuike', clId: 2 },
    { name: 'Peter', clId: 3 },
]

const NewInvoice = ({navigation}) => {

    const [formData, setFormData] = useState({
        clientId: '',
        clientName: '',
        invoiceItems: [],
         photo: null,
         isPaid: false,
         isLoading: false,
         note: ''
       })

    const [showClientModal, setShowClient] = useState(false)
    const [showSelectItemModal, setShowSelectItem] = useState(false)

    //const [showAccount, setShowAccount] = useState(false)

       const {
        clientId,
        clientName,
        invoiceItems,
        photo,
        isPaid,
        isLoading,
        note
      } = formData

      const togglePaidSwitch = () => {
        setFormData({...formData, isPaid: !isPaid})
      }

      const closeClientModal = () => {
        setShowClient(false)
      } 

      const closeItemModal = () => {
        setShowSelectItem(false)
      } 

    const onChange = name => text => setFormData({...formData, [name]: text})

    const handleChoosePhoto = () => {
        const options = {
            title: 'Select Logo',
            type: 'library',
            options: {
                maxHeight: 120,
                maxWidth: 120,
                selectionLimit: 0,
                mediaType: 'photo',
                includeBase64: false,
            },
        }

        launchImageLibrary(options, response => {
          if (response.didCancel) {
            return
          } else if (response.errorMessage) {
            return
          } else {
              const photo = {
                uri: response?.assets[0].uri,
                type: response?.assets[0].type,
                name: response?.assets[0].fileName || response?.assets[0].uri.substr(response?.assets[0].uri.lastIndexOf('/')).slice(1),
            }
            setFormData({...formData, photo})
          }
        })
      }


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, paddingBottom: 15, paddingHorizontal: 24,}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={navigation.goBack}>
                        <Image source={require('../../assets/img/icons/left-arrow.png')} resizeMode="contain" style={{width: 24, height: 24}} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, fontFamily: 'Helvetica-Bold', color: "#000", marginLeft: 25}}>New Invoice</Text>
                </View>
                <TouchableOpacity 
                activeOpacity={0.5}
                onPress={() => {}}
                style={{flexDirection: 'row', alignItems: 'center'}}
                >
                    <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: "#000", marginRight: 5}}>NGN ₦</Text>
                    <Image source={require('../../assets/img/icons/arrow-down.png')} resizeMode="contain" style={{width: 12, height: 12}} />
                </TouchableOpacity>
            </View>
            <ScrollView 
            keyboardShouldPersistTaps="handled" 
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{
            paddingHorizontal: 24,
            marginTop: 20,
            marginBottom: 10,
            paddingBottom: 80
            }}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={handleChoosePhoto}
                    style={{backgroundColor: '#7C7C7C', marginRight: 20, width: 120, height: 120, borderRadius: 8, overflow: 'hidden'}}
                    >
                        {photo ? (
                        <Image source={{uri: photo.uri}} style={{height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 8}} />
                    ) : null}
                    </TouchableOpacity>
                    <View>
                        <View>
                            <Text style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000"}}>{isPaid ? 'Receipt Number' : 'Invoice Number'}</Text>
                            <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: "#7C7C7C"}}>JO-1M6SXM</Text>
                        </View>
                        <View style={{marginTop: 5}}>
                            <Text style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000"}}>Issued Date</Text>
                            <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: "#7C7C7C"}}>JO-1M6SXM</Text>
                        </View>
                        <View style={{marginTop: 5}}>
                            <View style={{flexDirection: 'row'}}>
                                <View>
                                    <Text style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000", marginRight: 20}}>Payment Status</Text>
                                    <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: "#7C7C7C"}}>{isPaid ? 'Paid' : 'Unpaid'}</Text>
                                </View>
                                <Switch
                                    trackColor={{false: '#767577', true: '#6ad83c'}}
                                    thumbColor={isPaid ? '#d1ecf1' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={togglePaidSwitch}
                                    value={isPaid}
                                    //style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
                                />
                            </View>
                            
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 50}}>
                    <Text style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000"}}>Billed To</Text>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setShowClient(true)}
                    style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        borderWidth: 1, 
                        paddingHorizontal: 10, 
                        paddingVertical: 12,
                        borderRadius: 8, 
                        borderColor: '#7C7C7C',
                        marginTop: 10
                    }}
                    >
                        <Text style={{fontSize: 15, fontFamily: 'Helvetica', color: "#000"}}>{clientName}</Text>
                        <Image source={require('../../assets/img/icons/arrow-down.png')} resizeMode="contain" style={{width: 12, height: 12}} />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000"}}>Items</Text>
                    <View style={{
                        borderRadius: 8,
                        marginTop: 10,
                        overflow: 'hidden',
                        borderColor: '#cdcff5',
                        borderWidth: 1
                    }}>
                        <View style={{
                            flexDirection: 'row',  
                            alignItems: 'center', 
                            backgroundColor: '#eeeffc', 
                            padding: 14, 
                            
                            }}>
                            <Text style={{fontSize: 15, fontFamily: 'Helvetica-Bold', color: "#000", flex: 1}}>Item</Text>
                            <Text style={{fontSize: 15, fontFamily: 'Helvetica-Bold', color: "#000", flex: 1}}>Qty</Text>
                            <Text style={{fontSize: 15, fontFamily: 'Helvetica-Bold', color: "#000", flex: 1}}>Price (₦)</Text>
                            <Text style={{fontSize: 15, fontFamily: 'Helvetica-Bold', color: "#000", flex: 1}}>Subtotal</Text>
                        </View>
                        {invoiceItems.map((it, ind) => (
                            <View 
                            key={ind}
                            style={{
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            padding: 14, 
                            backgroundColor: ind % 2 == 0 ? '#fff' : '#eeeffc',
                            
                            }}>
                            <Text style={{fontSize: 15, fontFamily: 'Helvetica', color: "#000", flex: 1}}>Shoe</Text>
                            <Text style={{fontSize: 15, fontFamily: 'Helvetica', color: "#000", flex: 1}}>10</Text>
                            <Text style={{fontSize: 15, fontFamily: 'Helvetica', color: "#000", flex: 1}}>₦80</Text>
                            <Text style={{fontSize: 15, fontFamily: 'Helvetica', color: "#000", flex: 1}}>₦80</Text>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setShowSelectItem(true)}
                    style={{
                        borderWidth: 1,  
                        paddingVertical: 12,
                        borderRadius: 8, 
                        borderColor: '#7C7C7C',
                        marginTop: 30,
                    }}
                    >
                        <Text style={{fontSize: 15, fontFamily: 'Helvetica-Bold', color: "#000", textAlign: 'center'}}>Add Item</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <View style={{
                        paddingVertical: 10,
                        paddingHorizontal: 14,
                        //backgroundColor: 'blue',
                        borderBottomColor: '#EFEFEF',
                        borderBottomWidth: 1,
                        borderStyle: Platform.OS == "ios" ? 'solid' : 'dotted'
                        
                    }}>
                        <Text style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000", textAlign: 'right'}}>Subtotal: ₦240</Text>
                    </View>
                    <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={() => {}}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 14,
                        borderBottomColor: '#EFEFEF',
                        borderBottomWidth: 1,
                        borderStyle: Platform.OS == "ios" ? 'solid' : 'dotted'
                    }}>
                        <Text style={{fontSize: 12, fontFamily: 'Helvetica-Bold', color: "#000"}}>+ Add Tax</Text>
                        <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#000"}}>( 0 % ) Tax: ₦240</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={() => {}}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 14,
                        borderBottomColor: '#EFEFEF',
                        borderBottomWidth: 1,
                        borderStyle: Platform.OS == "ios" ? 'solid' : 'dotted'
                    }}>
                        <Text style={{fontSize: 12, fontFamily: 'Helvetica-Bold', color: "#000"}}>+ Add Discount</Text>
                        <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#000"}}>Discount: -₦40</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={() => {}}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 14,
                        borderBottomColor: '#EFEFEF',
                        borderBottomWidth: 1,
                        borderStyle: Platform.OS == "ios" ? 'solid' : 'dotted'
                    }}>
                        <Text style={{fontSize: 12, fontFamily: 'Helvetica-Bold', color: "#000"}}>+ Add Deposit</Text>
                        <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#000"}}>Deposited: -₦80</Text>
                    </TouchableOpacity>
                    <View style={{
                        paddingVertical: 12,
                        paddingHorizontal: 14,
                        //backgroundColor: 'blue',
                        borderBottomColor: '#EFEFEF',
                        borderBottomWidth: 1,
                        
                    }}>
                        <Text style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000", textAlign: 'right'}}>Total: ₦280</Text>
                    </View>
                </View>
                <View style={{marginTop: 18}}>
                    <Text style={{color: '#000', fontSize: 14, fontFamily: 'Helvetica'}}>Additional note:</Text>
                    <TextInput
                    multiline
                    numberOfLines={4}
                    editable
                    style={[styles.input, {textAlignVertical: 'top', height: 80}]}
                    selectionColor="#000"
                    value={note}
                    onChangeText={onChange('note')}
                    placeholder="Drop a message for the recipient"
                    />
                </View>
                <View style={{flexDirection: 'row', marginTop: 50}}>
                    <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={() => {}}
                    style={{
                        flex: 1,  
                        backgroundColor: '#EFEFEF', 
                        padding: 12,
                        borderRadius: 6,
                        marginRight: 2,
                        }}>
                        <Text style={{color: '#000', textAlign: 'center', textTransform: 'capitalize', fontSize: 16, fontFamily: 'Helvetica'}}>Preview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.5}
                    style={{
                        flex: 1, 
                        backgroundColor: '#575EDF', 
                        padding: 12,
                        borderRadius: 6,
                        marginLeft: 2,
                        }}>
                        <Text style={{color: '#FFFFFF', textAlign: 'center', textTransform: 'capitalize', fontSize: 16, fontFamily: 'Helvetica'}}>Create Invoice</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal
            animationType="slide"
            transparent={true}
            visible={showClientModal}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                }}>
                    <SelectClient 
                    closeModal={closeClientModal} 
                    setFormData={setFormData}
                    formData={formData}
                    data={clientData}
                    />
                </View>
            </Modal>
            <Modal
            animationType="slide"
            transparent={true}
            visible={showSelectItemModal}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                }}>
                    <SelectItem 
                    closeModal={closeItemModal} 
                    setFormData={setFormData}
                    formData={formData}
                    data={clientData}
                    />
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      //height: 54,
      borderWidth: 1,
      paddingVertical: 14,
      paddingHorizontal: 10,
      borderColor: '#EFEFEF',
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: 14,
      marginTop: 8
    },
})

export default NewInvoice
