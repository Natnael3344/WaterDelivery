import { View, Text,Image, Pressable } from 'react-native'
import React from 'react'
import { POPPINSBOLD } from '../assets/css/styles'
import {useNavigation} from '@react-navigation/native';

const CustomCard = ({image, text}) => {
    const navigation=useNavigation();
    const onPress = () => {
        navigation.navigate('product');
      };
  return (
    <Pressable 
    onPress={onPress}
    style={{
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        height:190,
        marginBottom:10,
        width:'100%',
        flex:0.5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#DBDBDB',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,}}>
      <Image source={image} style={{width:90,height:90}}/>
      <Text style={{fontSize:20, color:'black', fontFamily:POPPINSBOLD,fontWeight:'bold',textAlign:'center',marginTop:17}}>{text}</Text>
    </Pressable>
  )
}

export default CustomCard