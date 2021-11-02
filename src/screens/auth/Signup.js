import React, {useState, useRef, useMemo} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView,
    TouchableOpacity,
    TextInput,  
    KeyboardAvoidingView, 
    Platform } from 'react-native'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'


const styles = StyleSheet.create({
    input: {
      //height: 54,
      borderWidth: 1,
      padding: 17,
      borderColor: '#EFEFEF',
      borderRadius: 5,
      backgroundColor: '#F6F6F6',
      fontSize: 16,
      marginTop: 24
    },
  })

const Signup = ({navigation}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        referral: '',
        password: '',
        secureTextEntry: true,
        isLoading: false,
      })

    const sheetRef = useRef(null)  
    const snapPoints = useMemo(() => ["60%", "70%", "90%"], [])

    const {firstName, lastName, email, phoneNumber, 
        referral, password, secureTextEntry, isLoading} = formData

    const onChange = name => text => setFormData({...formData, [name]: text}) 

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
        //onChange={handleSheetChange}
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
            <Text style={{fontSize: 24, fontFamily: 'Helvetica-Bold', color: "#000"}}>Glad to have you</Text>
            <Text style={{fontSize: 16, fontFamily: 'Helvetica', color: "#000", marginTop: 10}}>Create a free account</Text>
            <View>
                <TextInput
                style={styles.input}
                selectionColor="#000"
                value={firstName}
                onChangeText={onChange('firstName')}
                placeholder="First Name"
                />
                <TextInput
                style={styles.input}
                selectionColor="#000"
                value={lastName}
                onChangeText={onChange('lastName')}
                placeholder="Last Name"
                />
                <TextInput
                style={styles.input}
                selectionColor="#000"
                value={email}
                onChangeText={onChange('email')}
                placeholder="Email"
                />
                <TextInput
                style={styles.input}
                selectionColor="#000"
                value={phoneNumber}
                onChangeText={onChange('phoneNumber')}
                placeholder="Phone Number"
                />
                <TextInput
                style={styles.input}
                selectionColor="#000"
                value={password}
                onChangeText={onChange('password')}
                placeholder="Password"
                //keyboardType="numeric"
                />
                <TextInput
                style={styles.input}
                selectionColor="#000"
                value={referral}
                onChangeText={onChange('referral')}
                placeholder="Referral Code"
                />
            </View>
            <TouchableOpacity 
            activeOpacity= {0.6}
            onPress={() => {}}
            style={{
                backgroundColor: '#000',
                padding: 18,
                borderRadius: 5,
                marginTop: 32
            }}>
                <Text style={{color: '#fff', textAlign: 'center', textTransform: 'capitalize', fontSize: 16, fontFamily: 'Helvetica'}}>Create a free account</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
                <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: '#929292', textAlign: 'right', marginRight: 4}}>Already have an account?</Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{color: '#000', fontSize: 14, fontFamily: 'Helvetica-Bold'}}>Log in here</Text>
                </TouchableOpacity>
            </View>
            </BottomSheetScrollView>
        </BottomSheet>
    </KeyboardAvoidingView>
        
    )
}

export default Signup