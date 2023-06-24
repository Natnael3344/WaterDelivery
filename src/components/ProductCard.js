import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { POPPINSBOLD } from '../assets/css/styles'
import {useNavigation} from '@react-navigation/native';
const ProductCard = ({image,text,text1,text2}) => {
    const navigation=useNavigation();
    const onPress = () => {
        navigation.navigate('about');
      };
  return (
    <View>
        <View style={{flexDirection:'row'}}>
        <Pressable onPress={onPress}>
        <Image source={image}/>
      </Pressable>
      <View style={{borderWidth:1,borderColor:'black',justifyContent:'center',alignItems:'center',height:15,width:15,marginLeft:-20,}}>
      <Text style={{color:'black'}}>+</Text>
      <View style={{height:5}}></View>
      </View>
     
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={{color:'#22212E',fontFamily:POPPINSBOLD,fontWeight:'bold'}}>{text}</Text>
        <Text style={{color:'#22212E',fontSize:11,fontFamily:POPPINSBOLD}}>{text1}</Text>
        <Text style={{color:'#22212E',fontFamily:POPPINSBOLD,fontWeight:'bold',marginBottom:20}}>{text2}</Text>
    
        </View>
     </View>
  )
}

export default ProductCard