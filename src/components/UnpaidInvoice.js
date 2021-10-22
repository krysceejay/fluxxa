import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const UnpaidInvoice = () => {

    const data = [
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "NV28900947"},
        {"name": "Terrance LLC", "reason": "Upfront Payment", "amount": "+ N560,000.00", "code": "0000000000"},
      ]

    const renderItem = ({item, _}) => {
        return (
            <View style={{
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: '#fff', 
                marginRight: 21,
                width: 246,
                paddingVertical: 13,
                paddingHorizontal: 16,
                borderRadius: 7,
                }}>
                <View
                style={{
                    width: 48,
                    height: 48,
                    backgroundColor: '#C4C4C4',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 24,
                    marginRight: 12,
                }} 
                />
                <View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000"}}>Terrance LLC</Text>
                    <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#A0A0A0", marginTop: 5}}>Due 13 Jul 2021</Text>
                </View>
            </View>
        )
    }
    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            contentContainerStyle={{paddingLeft: 24, paddingRight: 3}}
            ListEmptyComponent={() => (
                <View style={{ paddingBottom: 30}}>
                    <RegularText customstyle={{fontSize: 12, color: "#1D1D1D"}}>No data.</RegularText>
                </View>
            )}
        />
    )
}

export default UnpaidInvoice
