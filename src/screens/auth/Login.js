import React, {useState, useMemo, useRef} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
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

const Login = ({navigation}) => {

    const sheetRef = useRef(null)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        isLoading: false,
      })

    const snapPoints = useMemo(() => ["60%", "70%", "90%"], [])  

    const {email, password, secureTextEntry, isLoading} = formData

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
        index={0}
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
                <Text style={{fontSize: 24, fontFamily: 'Helvetica-Bold', color: "#000"}}>Welcome back</Text>
                <Text style={{fontSize: 16, fontFamily: 'Helvetica', color: "#000", marginTop: 10}}>Log into your account</Text>
                <View>
                    <TextInput
                    style={styles.input}
                    selectionColor="#000"
                    value={email}
                    onChangeText={onChange('email')}
                    placeholder="Email"
                    //keyboardType="numeric"
                    />
                    <TextInput
                    style={styles.input}
                    selectionColor="#000"
                    value={password}
                    onChangeText={onChange('password')}
                    placeholder="Password"
                    //keyboardType="numeric"
                    />
                    <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('Forgotpassword')} 
                    >
                        <Text 
                        style={{
                            fontSize: 14, 
                            fontFamily: 'Helvetica', 
                            color: '#929292', 
                            marginTop: 8, 
                            textAlign: 'right'
                        }}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                activeOpacity= {0.6}
                onPress={() => navigation.navigate('SetUpAccount')}
                style={{
                    backgroundColor: '#000',
                    padding: 18,
                    borderRadius: 5,
                    marginTop: 32
                }}>
                    <Text style={{color: '#fff', textAlign: 'center', textTransform: 'capitalize', fontSize: 16, fontFamily: 'Helvetica'}}>Log in</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
                    <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: '#929292', textAlign: 'right', marginRight: 4}}>Don’t have an account?</Text>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={{color: '#000', fontSize: 14, fontFamily: 'Helvetica-Bold'}}>Sign up here</Text>
                    </TouchableOpacity>
                </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </KeyboardAvoidingView>
    )
}

export default Login