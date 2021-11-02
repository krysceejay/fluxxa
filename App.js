import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './src/navigation/tabs/bottomtabs'
import AuthStack from './src/navigation/stacks/authStack'
import SetUpAccount from './src/screens/setup/SetUpAccount'
import SetPin from './src/screens/setup/SetPin'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthStack"
          headerMode="screen"
          screenOptions={{
            //gestureEnabled: false,
            headerShown: false,
            headerLeft: null,
          }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="SetUpAccount" component={SetUpAccount} />
        <Stack.Screen name="SetPin" component={SetPin} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
