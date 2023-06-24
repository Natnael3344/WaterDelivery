import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLOR } from '../../constants/GlobalConstants';
import { POPPINSBOLD, POPPINSREGULAR } from '../../assets/css/styles';
const CustomButton = ({onPress,color,color1,bottom,text}) => {
  return (
    <View style={{ position:'relative', bottom: bottom, left: 0, right: 0 }}>
    <Pressable onPress={onPress} style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:color,width:200,height:50,borderRadius:14,alignSelf:'center',justifyContent:'space-evenly'}}>
      <Text style={{color:color1,fontFamily:POPPINSBOLD,fontWeight:'bold',fontSize:16}}>{text}</Text>
      <AntDesign name="arrowright" size={25} color={color1} style={{alignSelf:'center'}}/>
    </Pressable>
    </View>
  )
}

export default CustomButton