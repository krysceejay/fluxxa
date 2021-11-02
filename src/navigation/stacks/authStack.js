import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/auth/Login'
import Signup from '../../screens/auth/Signup'
import Forgotpassword from '../../screens/auth/Forgotpassword'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="Login"
          headerMode="screen"
          screenOptions={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: null,
          }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
      </Stack.Navigator>
    )
}

export default AuthStack

