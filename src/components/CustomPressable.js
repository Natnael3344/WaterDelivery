import { View, Text,Pressable,Image } from 'react-native'
import React from 'react'
import { POPPINSBOLD } from '../assets/css/styles'

const CustomPressable = ({image, text}) => {
  return (
    <Pressable style={{height:46,backgroundColor:'#46C4F5',borderRadius:10,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',paddingHorizontal:10,width:'30%'}}>
      <Image source={image}/>
      <Text style={{color:'white',fontWeight:'600',fontFamily:POPPINSBOLD}}>{text}</Text>
    </Pressable>
  )
}

export default CustomPressable