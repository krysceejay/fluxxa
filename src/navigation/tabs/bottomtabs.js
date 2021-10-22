import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/home/Home'
import Clients from '../../screens/clients/Clients'
import Profile from '../../screens/profile/Profile'
import Transaction from '../../screens/transactions/Transaction'
import Invoice from '../../screens/invoice/Invoice'

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
        // initialRouteName={fromLogin ? 'Dashboard' : 'Account'}
        screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarLabelStyle: {
                fontSize: 12,
                fontFamily: 'Helvetica'
            },
            tabBarStyle: { paddingTop: 5 },
        }}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({focused}) => (
                focused ? 
                <Image source={require('../../assets/img/icons/home-active.png')} resizeMode="contain" style={{width: 24, height: 24}} /> :
                <Image source={require('../../assets/img/icons/home.png')} resizeMode="contain" style={{width: 24, height: 24}} /> 
            )
        }} />
        <Tab.Screen name="Clients" component={Clients} options={{
            tabBarIcon: ({focused}) => (
                focused ? 
                <Image source={require('../../assets/img/icons/client-active.png')} resizeMode="contain" style={{width: 24, height: 24}} /> :
                <Image source={require('../../assets/img/icons/client.png')} resizeMode="contain" style={{width: 24, height: 24}} /> 
            )
        }} />
        <Tab.Screen name="Invoices" component={Invoice} options={{
            tabBarIcon: ({focused}) => (
                focused ? 
                <Image source={require('../../assets/img/icons/invoice-active.png')} resizeMode="contain" style={{width: 24, height: 24}} /> :
                <Image source={require('../../assets/img/icons/invoice.png')} resizeMode="contain" style={{width: 24, height: 24}} /> 
            )
        }} />
        <Tab.Screen name="Transactions" component={Transaction} options={{
            tabBarIcon: ({focused}) => (
                focused ? 
                <Image source={require('../../assets/img/icons/invoice-active.png')} resizeMode="contain" style={{width: 24, height: 24}} /> :
                <Image source={require('../../assets/img/icons/invoice.png')} resizeMode="contain" style={{width: 24, height: 24}} /> 
            )
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({focused}) => (
                focused ? 
                <Image source={require('../../assets/img/icons/people-active.png')} resizeMode="contain" style={{width: 24, height: 24}} /> :
                <Image source={require('../../assets/img/icons/people.png')} resizeMode="contain" style={{width: 24, height: 24}} /> 
            )
        }} />
      </Tab.Navigator>
    )
  }

export default BottomTabs

//const styles = StyleSheet.create({})
