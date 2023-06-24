import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { POPPINSBOLD } from '../assets/css/styles'

const CustomBlackButton = ({text}) => {
  return (
    <Pressable style={{backgroundColor:'black',borderRadius:10,width:100,height:40,justifyContent:'center',alignItems:'center'}}>
      <Text style={{alignSelf:'center',color:'white',fontFamily:POPPINSBOLD,fontWeight:'bold'}}>{text}</Text>
    </Pressable>
  )
}

export default CustomBlackButton