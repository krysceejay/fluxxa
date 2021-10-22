import React, {useState} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView,
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform } from 'react-native'

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
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        isLoading: false,
      })

    const {email, password, secureTextEntry, isLoading} = formData

    const onChange = name => text => setFormData({...formData, [name]: text}) 

    return (
        <View style={{flex: 1}}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 15,
            }} />
            <View style={{
                flex: 2, 
                backgroundColor: '#fff', 
                borderTopStartRadius: 20,
                borderTopEndRadius: 20
                }}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ScrollView 
                keyboardShouldPersistTaps="handled" 
                showsVerticalScrollIndicator={false}
                bounces={false}
                contentContainerStyle={{paddingVertical: 55, paddingHorizontal: 24}}
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
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    </View>
    )
}

export default Login