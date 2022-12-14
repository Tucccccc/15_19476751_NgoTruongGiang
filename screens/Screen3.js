import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';

export default function Screen3() {
    const route = useRoute();

    var imgScr = require("../assets/hat.png");
    var [linkImage, setLinkImage] = new useState(imgScr);
    var [name, setName] = new useState("");

    useEffect(() => {
        if (route.params != null)
        setLinkImage(route.params.data.photo)
        setName(route.params.data.name)
    });

    return (
        <View>
            <Image style={{ width: 270, height: 325, marginTop: 50, alignSelf: 'center' }} source={linkImage}></Image>
            <Text>{name}</Text>
        </View>
    )
}