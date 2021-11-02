import React, {useState, useRef, useMemo} from 'react'
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
import BVNSuccess from '../../components/Modal/BVNSuccess'    

const styles = StyleSheet.create({
    input: {
      //height: 54,
      borderWidth: 1,
      padding: 17,
      borderColor: '#EFEFEF',
      borderRadius: 5,
      backgroundColor: '#FFF',
      fontSize: 16,
      marginTop: 9,
      color: '#000'
    },
  })

const SetUpAccount = ({navigation}) => {
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
                    backgroundColor: '#EFEFEF',
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
                    <Text style={{color: '#ADADAD', fontSize: 12, fontFamily: 'Helvetica'}}>Create PIN</Text>
                </View>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 30,
                marginTop: 30,
                //marginBottom: 24
            }}>
                <Image source={require('../../assets/img/icons/acct-verification.png')} resizeMode="contain" style={{width: 60, height: 60}} />
                <Text style={{color: '#1C1C1C', fontSize: 24, fontFamily: 'Helvetica-Bold', textAlign: 'center', marginTop: 9}}>Account Setup</Text>
                <Text style={{color: '#888888', fontSize: 14, fontFamily: 'Helvetica', textAlign: 'center', marginTop: 7}}>
                Kindly fill in your bank account information and BVN in order to create your wallet.
                </Text>
            </View>
            <View>
                <View style={{marginTop: 18}}>
                    <Text style={{color: '#1C1C1C', fontSize: 12, fontFamily: 'Helvetica'}}>Bank Account Number</Text>
                    <TextInput
                    style={styles.input}
                    selectionColor="#000"
                    value={email}
                    onChangeText={onChange('email')}
                    placeholder="Enter Account Number"
                    placeholderTextColor="#C4C4C4"
                    //keyboardType="numeric"
                    />
                </View>
                <View style={{marginTop: 18}}>
                    <Text style={{color: '#1C1C1C', fontSize: 12, fontFamily: 'Helvetica'}}>Bank Name</Text>
                    <TextInput
                    style={styles.input}
                    selectionColor="#000"
                    value={email}
                    onChangeText={onChange('email')}
                    placeholder="Select Bank"
                    placeholderTextColor="#C4C4C4"
                    />
                </View>
                <View style={{marginTop: 18}}>
                    <Text style={{color: '#1C1C1C', fontSize: 12, fontFamily: 'Helvetica'}}>Account Name</Text>
                    <TextInput
                    style={[styles.input, {backgroundColor: '#EFEFEF'}]}
                    selectionColor="#000"
                    value={email}
                    editable={false}
                    />
                </View>
                <View style={{marginTop: 18}}>
                    <Text style={{color: '#1C1C1C', fontSize: 12, fontFamily: 'Helvetica'}}>BVN</Text>
                    <TextInput
                    style={styles.input}
                    selectionColor="#000"
                    value={email}
                    onChangeText={onChange('email')}
                    placeholder="Enter Bank Verification Number"
                    placeholderTextColor="#C4C4C4"
                    //keyboardType="numeric"
                    />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 18}}>
                    <Image source={require('../../assets/img/icons/info.png')} resizeMode="contain" style={{width: 14, height: 14}} />
                    <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: '#1C1C1C', marginLeft: 9}}>
                    Dial *565*0# on your mobile phone to get your BVN.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 24}}>
                <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: '#7C7C7C', marginRight: 4}}>Why we need your BVN?</Text>
                <TouchableOpacity 
                onPress={() => {}}
                >
                    <Text style={{color: '#000', fontSize: 14, fontFamily: 'Helvetica-Bold'}}>Click here...</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            activeOpacity= {0.6}
            onPress={() => setShow(true)}
            style={{
                backgroundColor: '#000',
                padding: 18,
                borderRadius: 5
            }}>
                <Text style={{color: '#fff', textAlign: 'center', textTransform: 'capitalize', fontSize: 16, fontFamily: 'Helvetica'}}>Set up Account</Text>
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
                    <BVNSuccess 
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

export default SetUpAccount