import React, { useRef, useEffect } from 'react'
import { View, Text, Animated, TouchableOpacity, Image } from 'react-native'

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 
      style={{
        ...props.style,
        opacity: fadeAnim,         
      }}
    >
      {props.children}
    </Animated.View>
  );
}
const scrImage = require("../assets/hat.png");

export default function Screen1() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#f5f5dc' }}>
      <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '30%', alignItems: 'center' }}>
        <FadeInView style={{ width: '100%', height: 50 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>WELCOME TO FURIAS</Text>
        </FadeInView>
        <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '5%', alignItems: 'center'}}>
          <Text style={{fontSize: 26, textAlign: 'center'}}>A prenium online store for women and their stylish choice</Text>
        </View>
        <View style={{marginTop: '5%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#696969', width: 300, height: 50, borderRadius: 18, alignItems: 'center'}}>
          <TouchableOpacity style={{marginTop: 'auto', marginBottom: 'auto'}}>
            <Text style={{color: '#f0f8ff', fontSize: 18}}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={scrImage}></Image>
        </View>
      </View>
    </View>
  )
}
