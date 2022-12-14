import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'

const scrImage = require("../assets/screen2_head.png");

export default function Screen2({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  getListPhotos = () => {
    const apiURL = 'https://639921fa29930e2bb3ca6d81.mockapi.io/api/thicuoiky/Product';
    fetch(apiURL).then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
        console.log(resJson);
      }).catch((error) => {
        console.log('Error: ', error);
      }).finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getListPhotos();
    return () => {

    }
  }, [])

  renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => { navigation.navigate('Screen3', { data: item })}}>
          <View style={{ marginLeft: '10%' }}>
            <Image style={{ width: 150, height: 150 }} source={{ uri: item.image }}></Image>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text>{item.name}</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text>{item.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'column' }}>
      <View style={{ marginTop: '15%', marginLeft: '5%', display: 'flex', flexDirection: 'column' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
          WELCOME BACK!
        </Text>
        <Text>
          Jenifer  Marconova
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f5f5dc', width: '96%', marginTop: '5%' }}>
          <View style={{ display: 'flex', flexDirection: 'column', width: '63%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: '10%' }}>
              New Products
            </Text>
            <Text style={{ fontSize: 15, textAlign: 'center' }}>
              Get a 50% discount on your first purchase
            </Text>
            <View style={{ marginTop: '5%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#696969', width: 150, height: 36, borderRadius: 3, alignItems: 'center' }}>
              <TouchableOpacity style={{ marginTop: 'auto', marginBottom: 'auto' }} >
                <Text style={{ color: '#f0f8ff', fontSize: 15 }}>Buy now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image source={scrImage}></Image>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', marginTop: '5%' }}>
        <Text style={{ marginLeft: '5%', fontSize: 12, borderWidth: 1, borderColor: "thistle", borderRadius: 6, width: 100, height: 30, textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
          Trending
        </Text>
        <Text style={{ marginLeft: '5%', fontSize: 12, width: 100, height: 30, textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
          Popular
        </Text>
        <Text style={{ marginLeft: '5%', fontSize: 12, width: 100, height: 30, marginTop: 'auto', marginBottom: 'auto' }}>
          We recommended
        </Text>
      </View>
      <View>
        <SafeAreaView>
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={({ id }, index) => id}
            ></FlatList>
          )}
        </SafeAreaView>
      </View>
    </View>
  )
}
