import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Invoice from '../../screens/invoice/Invoice'
import NewInvoice from '../../screens/invoice/NewInvoice'

const Stack = createNativeStackNavigator()

const InvoiceStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="Invoice"
          headerMode="screen"
          screenOptions={{
            headerShown: false,
            headerLeft: null,
          }}>
        <Stack.Screen name="Invoice" component={Invoice} />
        <Stack.Screen name="NewInvoice" component={NewInvoice} />
      </Stack.Navigator>
    )
}

export default InvoiceStack