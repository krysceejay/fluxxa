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

const NewClient = ({closeModal}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        meetingPlace: '',
        shippingAddress: '',
        payingClient: false,
        isLoading: false,
    })

    const {name, email, phoneNumber, meetingPlace, shippingAddress, payingClient, isLoading} = formData

    const onChange = name => text => setFormData({...formData, [name]: text}) 

    const checkClient = () => {
        setFormData({...formData, payingClient: !payingClient})
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView 
            style={{flex: 1}}>
            <View style={{paddingTop: 20, paddingBottom: 15, paddingHorizontal: 24,}}>
                <Text style={{fontSize: 18, fontFamily: 'Helvetica-Bold', color: "#000"}}>New Client</Text>
            </View>
            <ScrollView 
            keyboardShouldPersistTaps="handled" 
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 80,
            }}>
                <TouchableOpacity 
                activeOpacity={0.5}
                onPress={() => {}}
                style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                    <Image source={require('../../assets/img/icons/account.png')} resizeMode="contain" style={{width: 20, height: 20}} />
                    <Text style={{color: '#7C7C7C', fontSize: 14, fontFamily: 'Helvetica', marginLeft: 10}}>Import from Contacts</Text>
                </TouchableOpacity>
                <View>
                    <View style={{marginTop: 18}}>
                        <Text style={{color: '#7C7C7C', fontSize: 14, fontFamily: 'Helvetica'}}>Client's Name</Text>
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={name}
                        onChangeText={onChange('name')}
                        />
                    </View>
                    <View style={{marginTop: 18}}>
                        <Text style={{color: '#7C7C7C', fontSize: 14, fontFamily: 'Helvetica'}}>Client's Email Address</Text>
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        />
                    </View>
                    <View style={{marginTop: 18}}>
                        <Text style={{color: '#7C7C7C', fontSize: 14, fontFamily: 'Helvetica'}}>Client's Phone Number</Text>
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={phoneNumber}
                        onChangeText={onChange('phoneNumber')}
                        />
                    </View>
                    <View style={{marginTop: 18}}>
                        <Text style={{color: '#7C7C7C', fontSize: 14, fontFamily: 'Helvetica'}}>Where Did You Meet This Client</Text>
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={meetingPlace}
                        onChangeText={onChange('meetingPlace')}
                        />
                    </View>
                    <View style={{marginTop: 18}}>
                        <Text style={{color: '#7C7C7C', fontSize: 14, fontFamily: 'Helvetica'}}>Shipping / Office Address</Text>
                        <TextInput
                        multiline
                        numberOfLines={4}
                        editable
                        style={[styles.input, {textAlignVertical: 'top', height: 60}]}
                        selectionColor="#000"
                        value={shippingAddress}
                        onChangeText={onChange('shippingAddress')}
                        />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 18}}>
                        <Text style={{color: '#7C7C7C', fontSize: 14, fontFamily: 'Helvetica', marginRight: 10}}>Is This Client A Paying Customer?</Text>
                        <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={checkClient}>
                            <Image source={payingClient ? require('../../assets/img/icons/checked.png') : require('../../assets/img/icons/unchecked.png')} resizeMode="contain" style={{width: 20, height: 20}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={() => closeModal()}
                    style={{
                        flex: 1,  
                        backgroundColor: '#EFEFEF', 
                        padding: 12,
                        borderRadius: 6,
                        marginRight: 2,
                        }}>
                        <Text style={{color: '#000', textAlign: 'center', textTransform: 'capitalize', fontSize: 16, fontFamily: 'Helvetica'}}>Cancel</Text>
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
                        <Text style={{color: '#FFFFFF', textAlign: 'center', textTransform: 'capitalize', fontSize: 16, fontFamily: 'Helvetica'}}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
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

export default NewClient
