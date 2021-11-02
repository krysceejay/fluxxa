import React, {useState, useMemo, useRef} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView,
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform,
    Image, 
    Modal } from 'react-native'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import PINSet from '../../components/Modal/PINSet'

const styles = StyleSheet.create({
    input: {
    //maxHeight: 56,
      paddingVertical: 6,
      width: 47,
      borderWidth: 1,
      borderColor: '#EFEFEF',
      borderRadius: 5,
      backgroundColor: '#FFF',
      fontSize: 28,
      fontFamily: 'Helvetica',
      color: '#000',
      textAlign: 'center',
        margin: 5,
    },
  })

const SetPin = ({navigation}) => {
    const sheetRef = useRef(null)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        isLoading: false,
      })

    const snapPoints = useMemo(() => ["60%", "70%", "90%"], [])   

    const [showModal, setShow] = useState(false)

    const {email, password, secureTextEntry, isLoading} = formData

    const onChange = name => text => setFormData({...formData, [name]: text}) 

    const onCloseModal = () => {
        setShow(false)
    }

    const BottomSheetBackground = ({style}) => {
        return (
          <View
            style={[
              {
                backgroundColor: '#fff',
                borderRadius: 20,
              },
              {...style},
            ]}
          />
        )
    }

    return (
        <KeyboardAvoidingView 
        style={{flex: 1}}
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <BottomSheet
            ref={sheetRef}
            index={2}
            snapPoints={snapPoints}
            backgroundComponent={props => <BottomSheetBackground {...props} />}
            >  
            <BottomSheetScrollView 
            keyboardShouldPersistTaps="handled" 
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{
                paddingVertical: 55, 
                paddingHorizontal: 24
            }}
            >
            <View style={{ 
                justifyContent: 'center', 
                alignItems: 'center',
                }}>
                <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                width: '70%',
                zIndex: 5
                }}> 
                    <View 
                    style={{
                    height: 18, 
                    width: 18,
                    borderRadius: 9, 
                    backgroundColor: '#000',
                    }}/> 
                    <View 
                    style={{
                    height: 18, 
                    width: 18,
                    borderRadius: 9, 
                    backgroundColor: '#000',
                    }}/> 
                </View>
                <View style={{
                    height: 2, 
                    width: '65%', 
                    backgroundColor: '#DEDEDE',
                    position: 'absolute',
                    top: '50%',
                    zIndex: 1
                    }} />
            </View>
            <View style={{
                justifyContent: 'center', 
                alignItems: 'center',
                marginTop: 5
                }}>
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    width: '85%',
                }}>
                    <Text style={{color: '#000', fontSize: 12, fontFamily: 'Helvetica'}}>Account Setup</Text>
                    <Text style={{color: '#000', fontSize: 12, fontFamily: 'Helvetica'}}>Create PIN</Text>
                </View>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 30,
                marginTop: 30,
                //marginBottom: 24
            }}>
                <Image source={require('../../assets/img/icons/security-badge.png')} resizeMode="contain" style={{width: 48, height: 60}} />
                <Text style={{color: '#1C1C1C', fontSize: 18, fontFamily: 'Helvetica', textAlign: 'center', marginTop: 9, fontWeight: 'normal'}}>
                We are making Kudos more secure for you!
                </Text>
                <Text style={{color: '#888888', fontSize: 14, fontFamily: 'Helvetica', textAlign: 'center', marginTop: 7, lineHeight: 20}}>
                Every user will now be required to create a security pin. This pin will be required  to process transactions.
                </Text>
            </View>
            <View style={{ marginTop: 40, marginBottom: 30}}>
                <View>
                    <Text style={{color: '#1C1C1C', fontSize: 12, fontFamily: 'Helvetica'}}>Enter New PIN</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 8
                    }}>
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={{marginTop: 24}}>
                    <Text style={{color: '#1C1C1C', fontSize: 12, fontFamily: 'Helvetica'}}>Confirm PIN</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 8
                    }}>
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        maxLength={1}
                        keyboardType="numeric"
                        />
                        <TextInput
                        style={styles.input}
                        selectionColor="#000"
                        value={email}
                        onChangeText={onChange('email')}
                        keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>
            
            <TouchableOpacity 
            activeOpacity= {0.6}
            onPress={() => setShow(true)}
            >
                <View style={{
                backgroundColor: '#000',
                padding: 18,
                borderRadius: 5,
            }}>
                    <Text style={{color: '#fff', textAlign: 'center', fontSize: 16, fontFamily: 'Helvetica'}}>Create PIN</Text>
                </View>                
            </TouchableOpacity>
                <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <PINSet 
                        navigation={navigation}
                        closeModal={onCloseModal}
                        />
                    </View>
                </Modal>
            </BottomSheetScrollView>
            </BottomSheet>
        </KeyboardAvoidingView>
    )
}

export default SetPin