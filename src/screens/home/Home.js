import React, { useState, useRef, useCallback, useMemo } from 'react'
import { Image, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import UnpaidInvoice from '../../components/UnpaidInvoice'

const Home = () => {
    const [fabActive, setFabActive] = useState(false)

    const sheetRef = useRef(null)

    const showFabBtns = () => {
        setFabActive(prev => !prev)
    }

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

  const snapPoints = useMemo(() => ["40%", "60%", "90%"], [])

  // callbacks
//   const handleSheetChange = useCallback((index) => {
//     console.log("handleSheetChange", index)
//   }, [])

//   const handleSnapPress = useCallback((index) => {
//     sheetRef.current?.snapToIndex(index);
//   }, [])

//   const handleClosePress = useCallback(() => {
//     sheetRef.current?.close();
//   }, [])

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

  // render
  const renderItem = useCallback(
    ({ item, index }) => (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        backgroundColor: '#fff',
        borderTopWidth: index === 0 ? 0 : 1,
        borderColor: '#EFEFEF'
      }}>
        <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            marginRight: 21,
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
                    <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#A0A0A0", marginTop: 5}}>Upfront payment</Text>
                </View>
            </View>
            <View>
                <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 14, fontFamily: 'Helvetica-Bold', textAlign: 'right', color: "#000"}}>+ N560,000.00</Text>
                <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#A0A0A0", marginTop: 5, textAlign: 'right'}}>NV28389292</Text>
            </View>
      </View>
      )
      ,
      []
    )

    return (
        
        <SafeAreaView style={{flex: 1}}>
            <View>
                <View style={{
                    //backgroundColor: 'red',
                    paddingHorizontal: 24,
                    paddingVertical: 30
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                            <Text style={{fontSize: 18, fontFamily: 'Helvetica', color: "#000"}}>Hello Chris,</Text>
                            <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#444444"}}>Hope its been a great day so far</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor: '#000', paddingVertical: 12, paddingHorizontal: 20, marginTop: 18, borderRadius: 10}}>
                        <View style={{borderColor: '#7C7C7C', borderBottomWidth: 1, paddingBottom: 9}}>
                            <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#A6A6A6" }}>Current Balance</Text>
                        </View>
                        <Text style={{fontSize: 24, fontFamily: 'Helvetica', color: "#D8D8D8", marginTop: 35, marginBottom: 5 }}>
                            <Text style={{fontSize: 14}}>NGN</Text> 450,000.00
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, marginBottom: 18}}>
                        <Text style={{fontSize: 16, fontFamily: 'Helvetica-Bold', color: "#000"}}>Unpaid Invoices</Text>
                        <TouchableOpacity 
                        activeOpacity={0.6}
                        onPress={() => {}}
                        >
                            <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: '#A0A0A0'}}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <UnpaidInvoice />
                </View>
            </View>
            <BottomSheet
            ref={sheetRef}
            index={0}
            snapPoints={snapPoints}
            //onChange={handleSheetChange}
            backgroundComponent={props => <BottomSheetBackground {...props} />}
            >
                <BottomSheetFlatList
                ListHeaderComponent={
                    <View>
                        <Text style={{fontSize: 16, fontFamily: 'Helvetica-Bold', color: '#000'}}>History</Text>
                        <Text style={{fontSize: 16, fontFamily: 'Helvetica', color: '#000', marginTop: 21, marginBottom: 5}}>Today, 20 Jul</Text>
                    </View>
                }
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={{backgroundColor: "#fff", paddingHorizontal: 24, paddingBottom: 30}}
                />
            </BottomSheet>
            {fabActive &&
            <View style={{
                //backgroundColor: 'red',
                position: 'absolute',
                bottom: 95,
                right: 15,
                zIndex: 2,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
                width: '50%',
            }}>
                <TouchableOpacity 
                onPress={() => {}}
                style={{
                    backgroundColor: '#000',
                    borderWidth: 1,
                    borderRadius: 9,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 18,
                    paddingVertical: 10
                }}
                activeOpacity={0.9}
                >
                    <Image source={require('../../assets/img/icons/address-book.png')} resizeMode="contain" style={{width: 24, height: 24}} />
                    <Text style={{fontSize: 16, fontFamily: 'Helvetica', color: '#fff', marginLeft: 7, textTransform: 'capitalize'}}>Add new Client</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {}}
                style={{
                    backgroundColor: '#000',
                    borderWidth: 1,
                    borderRadius: 9,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 18,
                    paddingVertical: 10,
                    marginTop: 12
                }}
                activeOpacity={0.9}
                >
                    <Image source={require('../../assets/img/icons/newspaper-folding.png')} resizeMode="contain" style={{width: 24, height: 24}} />
                    <Text style={{fontSize: 16, fontFamily: 'Helvetica', color: '#fff', marginLeft: 7, textTransform: 'capitalize'}}>Create new Invoice</Text>
                </TouchableOpacity>
            </View> 
            }
            <TouchableOpacity 
            onPress={showFabBtns}
            style={{
                position: 'absolute',
                bottom: 25,
                right: 15,
                zIndex: 2,
                backgroundColor: fabActive ? '#fff' : '#000' ,
                borderWidth: 1,
                borderRadius: 9,
                width: 56,
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            activeOpacity={0.9}
            >
                <Image 
                source={fabActive ? require('../../assets/img/icons/plus-black.png') : require('../../assets/img/icons/plus-white.png')} 
                resizeMode="contain" 
                style={{width: 22, height: 23}} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home

//const styles = StyleSheet.create({})
