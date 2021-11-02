import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Clients from '../../screens/clients/Clients'
//import NewClient from '../../screens/clients/NewClient'

const Stack = createNativeStackNavigator()

const ClientStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="Client"
          headerMode="screen"
          screenOptions={{
            headerShown: false,
            headerLeft: null,
          }}>
        <Stack.Screen name="Client" component={Clients} />
      </Stack.Navigator>
    )
}

export default ClientStack

