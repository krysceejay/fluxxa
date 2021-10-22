import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './src/navigation/tabs/bottomtabs'
import Login from './src/screens/auth/Login'
import Signup from './src/screens/auth/Signup'
import Forgotpassword from './src/screens/auth/Forgotpassword'
import SetUpAccount from './src/screens/setup/SetUpAccount'
import SetPin from './src/screens/setup/SetPin'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="SetUpAccount" component={SetUpAccount} />
        <Stack.Screen name="SetPin" component={SetPin} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
