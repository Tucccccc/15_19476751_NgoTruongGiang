import React, { useRef, useEffect } from 'react'
import { View, Text, Animated } from 'react-native'

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

export default function Screen1() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#f5f5dc' }}>
      <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '30%' }}>
        <FadeInView style={{ width: '100%', height: 50 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>WELCOME TO FURIAS</Text>
        </FadeInView>
      </View>
    </View>
  )
}
