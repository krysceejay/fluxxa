import React, { useState, useRef, useCallback, useMemo } from 'react'
import { Image, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Animated, FlatList } from 'react-native'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import RNAnimatedScrollIndicators from 'react-native-animated-scroll-indicators'

const { width, height } = Dimensions.get('screen');

const imageW = width * 0.7
const imageH = imageW * 1.54
const IMAGE_SIZE = 80
const SPACING = 12

const Transaction = () => {
    const sheetRef = useRef(null)

    const [activeIndex, setActiveIndex] = useState(0)

    const scrollX = useRef(new Animated.Value(0)).current
    const topRef = useRef()
    const thumbRef = useRef()

    const scrollToActiveIndex = index => {
      setActiveIndex(index)
      topRef?.current?.scrollToOffset({
        offset: index * (width - 48),
        animated: true
      })
      if(index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > (width - 48) / 2){
        thumbRef?.current?.scrollToOffset({
          offset: index * (IMAGE_SIZE + SPACING) - (width - 48) / 2 + IMAGE_SIZE / 2,
          animated: true
        })
      }else {
        thumbRef?.current?.scrollToOffset({
          offset: 0,
          animated: true
        })
      }
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

  const dataH = [
      {"title": "Current Balance", "amount": "450,000.00"},
      {"title": "Total Income", "amount": "450,000.00"},
      {"title": "Total Expenses", "amount": "450,000.00"},
      {"title": "Pending Income", "amount": "450,000.00"},
  ]

  const snapPoints = useMemo(() => ["40%", "60%", "90%"], [])

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

    const renderItemH = ({item}) => {
        return (
            <View style={{
                width: width - 48,
                paddingVertical: 12, 
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{fontSize: 24, fontFamily: 'Helvetica', color: "#D8D8D8", marginTop: 90, marginBottom: 5 }}>
                    <Text style={{fontSize: 14}}>NGN</Text> {item.amount}
                </Text>
                <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#A6A6A6", marginTop: 8 }}>{item.title}</Text>
            </View>
        )
    }

    return (
        
       <SafeAreaView style={{ flex: 1 }}>
         <View>
              <View style={{marginHorizontal: 24, marginTop: 30, borderRadius: 10, backgroundColor: '#000', paddingBottom: 15}}>
                <Animated.FlatList
                ref={topRef}
                data={dataH}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true}
                )}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItemH}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={ev => {
                  scrollToActiveIndex(Math.ceil(ev.nativeEvent.contentOffset.x / (width - 48)))
                }}
                ListEmptyComponent={() => (
                    <View style={{
                      width: width - 48,
                      paddingVertical: 12, 
                      paddingHorizontal: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingBottom: 60,
                  }}>
                      <Text style={{fontSize: 24, fontFamily: 'Helvetica', color: "#D8D8D8", marginTop: 90, marginBottom: 5 }}>
                          <Text style={{fontSize: 14}}>NGN</Text> ---,---.--
                      </Text>
                      <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#A6A6A6", marginTop: 8 }}>Current Balance</Text>
                  </View>
                )}
                />
                <FlatList
              ref={thumbRef}
              data={dataH}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                marginTop: 30,
                paddingVertical: 2,
              }}
              renderItem={({_, index}) => (
                <View style={{
                  height: 12, 
                  width: 12, 
                  backgroundColor: activeIndex === index ? '#fff' : '#858383', 
                  borderRadius: 6, 
                  marginHorizontal: 3
                  }} />
                )}
              />
            </View>
            <View style={{marginTop: 24, marginBottom: 18, marginHorizontal: 24}}>
              <Text style={{fontSize: 16, fontFamily: 'Helvetica-Bold', color: "#000"}}>Unpaid Invoices</Text>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 24}}>
              <View style={{
                  flex: 1,
                  flexDirection: 'row',  
                  backgroundColor: '#fff', 
                  padding: 14,
                  borderRadius: 7,
                  marginRight: 9,
                  }}>
                  <View
                  style={{
                      width: 29,
                      height: 29,
                      backgroundColor: '#C4C4C4',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 24,
                      marginRight: 9,
                  }} 
                  />
                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                      <Text style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000"}}>Invest Funds</Text>
                      <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#A0A0A0", marginTop: 5}}>Earn up to 21% p.a</Text>
                  </View>
              </View>
              <View style={{
                  flex: 1,
                  flexDirection: 'row',  
                  backgroundColor: '#fff', 
                  marginLeft: 9,
                  padding: 14,
                  borderRadius: 7,
                  }}>
                  <View
                  style={{
                      width: 29,
                      height: 29,
                      backgroundColor: '#C4C4C4',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 24,
                      marginRight: 9,
                  }} 
                  />
                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                      <Text style={{fontSize: 14, fontFamily: 'Helvetica-Bold', color: "#000"}}>Withdraw Funds</Text>
                      <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#A0A0A0", marginTop: 5}}>Transfer to bank</Text>
                  </View>
              </View>
            </View>
          </View>
          <BottomSheet
            ref={sheetRef}
            index={0}
            snapPoints={snapPoints}
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
            <TouchableOpacity 
            onPress={() => {}}
            style={{
                position: 'absolute',
                bottom: 25,
                right: 15,
                zIndex: 2,
                backgroundColor: '#000' ,
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
                source={require('../../assets/img/icons/plus-white.png')} 
                resizeMode="contain" 
                style={{width: 22, height: 23}} />
            </TouchableOpacity>
      </SafeAreaView>
    )
}

export default Transaction

